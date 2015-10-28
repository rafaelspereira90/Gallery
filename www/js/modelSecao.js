function getTasks (){
  this.itens = [];
  var lista = localStorage.getItem("tasklist");
  if(lista !== null)
  {
    this.itens = angular.fromJson(lista);
  }
  this.save = function () {
    var lista = angular.toJson(this.itens);
    localStorage.setItem("tasklist", lista);
  }
    this.remove = function (item) {
      var pos = this.itens.indexOf(item);
      this.itens.splice(pos,1);
    };

    this.add = function(item){
      this.itens.push(item);
    };
}
