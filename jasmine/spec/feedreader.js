/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {

    describe('RSS Feeds', function () {

        /* Make sure that the allFeeds variable has been defined and that it is not empty.  */
        it('are defined', function () {
            expect(allFeeds).toBeDefined(); //var defined
            expect(allFeeds.length).not.toBe(0); //length of feeds
        });

        /* Ensures that the allFeeds object has a URL defined and that the URL is not empty. */
        it('have a url', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toBeTruthy();
            }
        });

        /* Ensures that the allFeeds object has a name defined and that the name is not empty.*/
        it('have a name', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).toBeTruthy();
            }
        });
    });


    describe('The menu', function () {

        /* Ensures the menu element is hidden by default. */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Ensures the menu changes visibility when the menu icon is clicked.  */
        it('changes on click', function () {
            var menuIcon = $(".menu-icon-link");
            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);

            //hidden after clicking again
            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });


    describe('Initial Entries', function () {
        /* Ensures when the loadFeed function is called and completes its work, there is at least a single .entry
         element within the .feed container. */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('adds an entry', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0); //there should at least be one entry
            done();
        });
    });


    describe('New Feed Selection', function () {

        /* Ensures when a new feed is loaded by the loadFeed function that the content actually changes.*/
        var beforeResults;

        beforeEach(function (done) {
            loadFeed(0, function () {
                beforeResults = $(".feed").text();
                loadFeed(1, done);
            });
        });

        it('changes the content', function () {
         expect($(".feed").text()).not.toEqual(beforeResults);
        });
    }
    );
}());
