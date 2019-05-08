const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('GeunHye', 100)
    dinosaur1 = new Dinosaur('Littlefoot', 'herbivore', 10)
    dinosaur2 = new Dinosaur('The Sharptooth', 'carnivore', 100)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'GeunHye')
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 100)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add_dinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    park.remove_dinosaur_by_index(dinosaur1)
    const actual = dinosaur2.species
    assert.strictEqual(actual, 'The Sharptooth')
  });


  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.most_popular()
    assert.deepStrictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.all_of_species_by__diet('Littlefoot')
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should calculate the total number of visitors per day', function () {
    park.add_dinosaur(dinosaur1)
    park.add_dinosaur(dinosaur2)
    const actual = park.total_visitors()
    assert.strictEqual(actual, 110)
  });

  it('should be able to remove all dinosaurs of a particular species');

});
