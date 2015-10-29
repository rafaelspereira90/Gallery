
var app = angular.module('starter.controllers', ['ionic','ngCordova']);

app.controller('HomeCtrl', function($scope,$ionicPopup, $timeout,$ionicListDelegate,$state,$cordovaCamera) {
 $scope.pictureURL='http://placehold.it/300x300';


  $scope.tirarFoto = function () {

                   var options = {
                     quality: 100,
                       destinationType: Camera.DestinationType.DATA_URL,
                       sourceType: Camera.PictureSourceType.CAMERA,
                       allowEdit: true,
                       encodingType: Camera.EncodingType.JPEG,
                       targetWidth: 300,
                       targetHeight: 300,
                       popoverOptions: CameraPopoverOptions,
                       saveToPhotoAlbum: true,
                       correctOrientation:true
                 };

                     $cordovaCamera.getPicture(options).then(function (imageData) {
                         $scope.pictureURL = "data:image/jpeg;base64," + imageData;
                         console.log(pictureURL);
                     }, function (error) {
                         console.error("error: "+ error);
                         // An error occured. Show a message to the user
                     });
                 }



//SEÇOES
  var tasks = new getTasks();
  $scope.lista = tasks.itens;
  $scope.showMarked = false;
  $scope.removeStatus = false;
  $scope.pictureURL = 'http://placehold.it/300x300';

  function getItem(item, novo) {
      $scope.data = {};
      $scope.data.newTask = item.nome;
      $ionicPopup.show({
        title:"Nova Seção",
        scope:$scope,
        template:"<input type='text' placeholder='Nova seção' autofocus='true' ng-model='data.newTask'></input>",
        buttons:[
          {text:"Ok",
          onTap:function(e){
            item.nome = $scope.data.newTask;
            if(novo)
            {
              tasks.add(item);
            }
              tasks.save();

          }},
          {text: "Cancelar"}
        ]
      });
    $ionicListDelegate.closeOptionButtons();//fecha o botão do editar
    }

    $scope.irNotificacoes = function()
    {
      $state.go('app.newNot');
    }
    $scope.irSecoes = function()
    {
      $state.go('app.secoes');
    }

    $scope.onItemRemove = function(item) {
        tasks.remove(item);
        tasks.save();
      };
    $scope.onClickRemove = function(){
      $scope.removeStatus = !$scope.removeStatus;
    };
    $scope.onItemAdd = function (){
      var item = {nome:""};
      getItem(item, true);
    };
    $scope.onItemEdit = function(item){
      getItem(item, false);
      tasks.save();
    };

    $scope.resultado = "";
  $scope.adicionarDisciplina = function (valor){
    var query = "INSERT INTO disciplinas(nome) values(teste)";
    $cordovaSQLite.execute(db,query,["teste"]).then(function(result){
      //$scope.resultado.push({mensagem: "Insert OK!"});
      $scope.resultado = "Insert OK!";
    alert(resultado);
    },function(error){
      $scope.resultado = "Insert Failed!";
    });
  }

  $scope.carregarDisciplinas = function (){
    var query = "SELECT nome FROM disciplinas";
    $cordovaSQLite.execute(db,query,["teste"]).then(function(result){
      if (result.rows.length>0) {
        $scope.resultado = result.rows.item(0).nome+"encontrada.";  
      }else{
        $scope.resultado ="Nada encontrado.";
      }
    alert(resultado);  
    },function(error){
      console.log("erro!");
    });
  }


});
