import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Detail from "./Detail";
import { getChapters } from "../service";

interface Data {
  chapters: any;
}

const List = () => {
  let [count, setCount] = useState(0);
  let [data, setData] = useState<Data>({ chapters: [] });

  useEffect(() => {
    const getData = async () => {
      const d = await getChapters(
        "https://api.hetao101.com/einstein-logic/v2/chapters?unitId=3501&userId=1221907&subjectId=1&courseCategoryId=1"
      );

      setData(d.data);
    };

    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }, [count, data]);

  return (
    <div>
      <ul>
        <li>{count}</li>
        <Detail count={count} />

        {data &&
          data.chapters.map((chapter: any) => {
            return <li>{chapter.description}</li>;
          })}
      </ul>
    </div>
  );
};

List.propTypes = {};

export default List;
