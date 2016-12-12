/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {

    describe('RSS Feeds', function () {

        it('are defined', function () {
            expect(allFeeds).toBeDefined(); //var defined
            expect(allFeeds.length).not.toBe(0); //length
        });

        it('have a url', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toBeTruthy();
            }
        });

        it('have a name', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).toBeTruthy();
            }
        });
    });


    describe('The menu', function () {

        it('is hidden by default', function () {
            expect(document.getElementsByTagName('body')[0].className).toBe("menu-hidden");
        });

        it('changes on click', function () {
            var menuIcon = $(".menu-icon-link");
            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);

            menuIcon.trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });


    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('adds an entry', function () {
            expect(document.getElementsByClassName("entry")[0]).toBeDefined();
        });
    });


    describe('New Feed Selection', function () {
        var beforeResults, afterResults;

        beforeEach(function (done) {
            loadFeed(1, function () {
                beforeResults = $(".feed").text();
                done();
            });
        });

        it('changes the content', function (done) {
            loadFeed(2, function () {
                expect($(afterResults)).not.toEqual(beforeResults);
                done();
            });

        });
    });

}());
