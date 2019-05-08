const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.add_dinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.remove_dinosaur_by_index = function (dino_to_delete) {
  const dino_index = this.dinosaurs.indexOf(dino_to_delete);
  this.dinosaurs.splice(dino_index, 1)
};

Park.prototype.most_popular = function () {

    this.dinosaurs.sort(function(b, a){return a.guestsAttractedPerDay - b.guestsAttractedPerDay});
    return this.dinosaurs[0];
};

Park.prototype.all_of_species_by__diet = function (species) {
  const all_species = []
  for (var dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      all_species.push(dinosaur)
    }
  }
  return all_species
};

Park.prototype.total_visitors = function () {
  let total_visitors = 0;
  for (var dinosaur of this.dinosaurs){
    dinosaur.guestsAttractedPerDay += total_visitors
  }
  return total_visitors
};



module.exports = Park;
