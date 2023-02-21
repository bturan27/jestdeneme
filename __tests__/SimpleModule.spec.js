import {simpleFunc} from "../src/SimpleModule.js";

describe("A simple Module", () => {
     test("it should say hello", () =>{
         expect(simpleFunc()).toEqual("hello!")
     })
})