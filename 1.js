/**
 * Created by zzx on 2018/2/18.
 */
import './1.css'
import './3.js'

(() => {
  console.log(6);
})()

document.querySelector('#ss').innerHTML = '668800'
document.querySelector('#cl').addEventListener('click', async() => {
  console.log('hello')
  const test = await import(/* webpackChunkName: "hello" */ './2')

  test.test();
})