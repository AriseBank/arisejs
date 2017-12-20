var Buffer = require("buffer/").Buffer;
var should = require("should");
var aco = require("../index.js");

describe("Arise JS", function () {

	it("should be ok", function () {
		(aco).should.be.ok;
	});

	it("should be object", function () {
		(aco).should.be.type("object");
	});

	it("should have properties", function () {
		var properties = ["transaction", "signature", "vote", "delegate", "crypto"];

		properties.forEach(function (property) {
			(aco).should.have.property(property);
		});
	});

});
