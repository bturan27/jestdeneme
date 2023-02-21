
//it takes two arguments, one is the describing the test suite and second callback function for wrapping the actual test
//testing is the matter of inputs and expected outputs and functions

function filterByTerm(arrayinadi, aramaYapacaginlink){
    return arrayinadi.filter(function(arrayElement) {
        return arrayElement.url.match(aramaYapacaginlink)
    })
}

describe("Filter function", () => {

    test("it should filter by a search term (link)", () => {

        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);

    });
});
