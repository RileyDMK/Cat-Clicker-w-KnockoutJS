var initialCats = [
  {
    name : "Tristan",
    imgSrc : "img/22252709_010df3379e_z.jpg",
    clickCount : 0,
    imgAttribution : '',
    nicknames : ['T']
  },
  {
    name : "Pooka",
    imgSrc : "img/22252709_010df3379e_z.jpg",
    clickCount : 0,
    imgAttribution : '',
    nicknames : ['P']
  },
  {
    name : "Godfried",
    imgSrc : "img/22252709_010df3379e_z.jpg",
    clickCount : 0,
    imgAttribution : '',
    nicknames : ['G']
  },
  {
    name : "Dave",
    imgSrc : "img/22252709_010df3379e_z.jpg",
    clickCount : 0,
    imgAttribution : '',
    nicknames : ['D']
  },
  {
    name : "Ishmael",
    imgSrc : "img/22252709_010df3379e_z.jpg",
    clickCount : 0,
    imgAttribution : '',
    nicknames : ['I']
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function(){
    var lvl = "";
    if(this.clickCount()<10){
      lvl = "Newborn";
    }
    if(this.clickCount()>=10){
      lvl = "Kitten";
    }
    if(this.clickCount()>=20){
      lvl = "Predator";
    }
    return lvl;
  },this);
}

var ViewModel = function () {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };
};

ko.applyBindings(new ViewModel());
