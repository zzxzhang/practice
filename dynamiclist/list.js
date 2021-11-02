let page = 1;

const List = {
  initialConfig: {
    height: 600,
  },
  maxInitLength: 20,
  rowHeight: null,
  currentIndex: 0,
  showingIndex: [0],
  data: [],
  updating: false,
  setup(opts) {
    if (opts.data && opts.data.length) {
      this.data = [...this.data, ...opts.data];
      delete opts.data;
    }

    this.renderer = opts.renderer || null;

    this.config = {
      ...this.initialConfig,
      ...opts,
    };

    this.wrapper = document.createElement("div");
    this.container = document.createElement("ul");
    this.head = document.createElement("div");

    this.config.el.appendChild(this.container);
    this.config.el.onscroll = (e) => {
      this.onScroll(e);
    };

    const observer = new MutationObserver((mutationsList) => {
      // alert("mutation");
      if (!this.rowHeight) {
        setTimeout(() => {
          this.calculateRowHeight();
        }, 0);
      }

      setTimeout(() => {
        this.render();
      }, 300);
    });

    // 以上述配置开始观察目标节点
    observer.observe(this.container, { childList: true });

    const len = Math.min(this.maxInitLength, this.data.length);
    this.renderRows(0, len);
    this.showingIndex = [0, len - 1];
  },
  length() {
    return this.data.length;
  },
  calculateRowHeight() {
    const firstRow = this.container.querySelector("*:first-child");
    const rect = firstRow.getBoundingClientRect();
    this.setRowHeight(rect.height);
    console.log(rect.height);
  },
  updateData() {},
  createRow() {
    const row = document.createElement("li");
    return row;
  },
  setRowHeight(v) {
    this.rowHeight = v;
  },
  async onScroll(e) {
    if (this.updating) return;
    // console.log(e);
    const { offsetHeight, scrollHeight, scrollTop } = this.config.el;
    if (scrollHeight - scrollTop - offsetHeight < offsetHeight) {
      this.updating = true;
      const list = await this.config.update();
      this.data = [...this.data, ...list];
      this.renderRows(this.data.length - list.length, this.data.length);
      this.updating = false;
    }
  },
  removeRows(start, end) {
    for (let i = start; i < end; i++) {
      this.container.childNodes[i].style.display = "none";
    }
  },
  renderRows(start, end) {
    if (!this.renderer) return;

    const frag = document.createDocumentFragment();
    for (let i = start; i < end; i++) {
      frag.appendChild(this.renderer(this.data[i]));
    }

    if (start > this.showingIndex[0]) {
      this.container.appendChild(frag);
    } else {
      const referenceNode = this.container.querySelector(
        `*:nth-child(${this.showingIndex[0]})`
      );

      this.container.insertBefore(frag, referenceNode);
    }
  },
  render() {
    if (!this.rowHeight) return;
    // 计算当前显示行索引
    const { offsetHeight, scrollHeight, scrollTop } = this.config.el;

    const currentIndex = scrollTop / this.rowHeight;
    this.currentIndex = scrollTop / this.rowHeight;
  },
};

async function getList() {
  const res = await fetch(
    `https://api.testing.hetao101.com/fe-builder/api/pages/0/0/${page}`
  );

  const {
    data: { list },
  } = await res.json();

  return list;
}

(async () => {
  const list = await getList();
  List.setup({
    data: list,
    el: document.querySelector("#dlist"),
    renderer(row) {
      const li = document.createElement("li");
      li.innerHTML = `<div>${row.id}</div><div>${row.name}</div><div>${row.previewLink}</div>`;
      return li;
    },
    async update() {
      page++;
      const list = await getList();
      return list;
    },
  });
})();
