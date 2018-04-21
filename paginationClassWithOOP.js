/*
Your task is to create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

Example
The pagination class will accept 2 parameters:
1. items (default: []): An array of contents to paginate.
2. pageSize (default: 10): The amount of items to show in each page.
So for example we could initialize our pagination like this:

    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const p = new Pagination(alphabetArray, 4);

And then use the method getVisibleItems to show the contents of the paginated array.

    console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]

You will have to implement various methods to go through the pages such as:
- prevPage
- nextPage
- firstPage
- lastPage
- goToPage

Here's a continuation of the example above using nextPage and lastPage:
    p.nextPage();
    console.log(p.getVisibleItems()); // ["e", "f", "g", "h"]
    p.lastPage();
    console.log(p.getVisibleItems()); // ["y", "z"]

Notes
- You don't have to use ES6 class if you don't want to
- The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
- The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage();
- Please remove the comments I provided before publishing your solution.
 */

class Pagination {
    constructor(items, pageSize) {
        this.items = items || [];       // Holds the items array
        this.pageSize = parseInt(pageSize, 10) || 10;    // Holds the size of each page
        this.totalPages = this.items.length > 0
            ? Math.ceil(this.items.length / this.pageSize)
            : 1;  // Holds the total number of pages
        this.currentPage = 1; // Holds the current page number
    }

    // Methods
    // Goes to the previous page
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage -= 1;
        }
        return this;
    }

    // Goes to the next page
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage += 1;
        }
        return this;
    }

    // Goes to the first page
    firstPage() {
        this.currentPage = 1;
        return this;
    }

    // Goes to the last page
    lastPage() {
        this.currentPage = this.totalPages;
        return this;
    }

    // Goes to a page determined by the `page` argument
    goToPage(page) {
        page < 1
            ? this.currentPage = 1

            : Math.floor(page) <= this.totalPages
            ? this.currentPage = Math.floor(page)
            : this.currentPage = this.totalPages;
        return this;
    }

    // Returns the currently visible items as an array
    getVisibleItems() {
        return this.items.filter(function (item, index) {
            return this.currentPage === Math.ceil((index + 1) / this.pageSize)
        }, this);
    }
}


// Checking correct default values
const defaultPagination = new Pagination();
console.log('Test 1 (10):', defaultPagination.pageSize);
console.log('Test 2 (0):', defaultPagination.items.length);
console.log('Test 3 (true):', Array.isArray(defaultPagination.items));

// Checking correct handling of float numbers as pageSize
console.log('Test 4 (8):', new Pagination(new Array(0), 8.8).pageSize);

// Checking correct amount of pages
console.log('Test 5 (1):', new Pagination(new Array(0), 10).totalPages);
console.log('Test 6 (1):', new Pagination(new Array(1), 10).totalPages);
console.log('Test 7 (1):', new Pagination(new Array(10), 10).totalPages);
console.log('Test 8 (2):', new Pagination(new Array(11), 10).totalPages);

// Checking correct currentPage
console.log('Test 9 (1):', (new Pagination(new Array(0), 10)).currentPage);
console.log('Test 10 (1):', (new Pagination(new Array(1), 10)).currentPage);
console.log('Test 11 (1):', (new Pagination(new Array(11), 10)).currentPage);

// Checking correct implementation of methods that change page
const p1 = new Pagination(new Array(69), 5);
console.log('Test 12 (2):', p1.nextPage().currentPage);
console.log('Test 13 (14):', p1.lastPage().currentPage);
console.log('Test 14 (14):', p1.nextPage().currentPage);
console.log('Test 15 (13):', p1.prevPage().currentPage);
console.log('Test 16 (1):', p1.firstPage().currentPage);
console.log('Test 17 (1):', p1.prevPage().currentPage);
console.log('Test 18 (14):', p1.goToPage(99).currentPage);
console.log('Test 19 (4):', p1.goToPage(4).currentPage);
console.log('Test 20 (6):', p1.goToPage(6.5).currentPage);
console.log('Test 21 (1):', p1.goToPage(-99).currentPage);
//
// // Checking correct visible items returned in various pages
const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p2 = new Pagination(ids, 5);
console.log('Test 22 ([0, 1, 2, 3, 4]):', p2.getVisibleItems());
console.log('Test 23 ([5, 6, 7, 8, 9]):', p2.nextPage().getVisibleItems());
console.log('Test 24 ([10]):', p2.nextPage().getVisibleItems());
