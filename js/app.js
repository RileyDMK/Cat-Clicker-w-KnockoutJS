var ViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
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
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flicker.com/photos/big');

  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());
