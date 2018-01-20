'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http, $window) {

  
        console.log("hello")
          
   /*   $http.get("http://demo4842709.mockable.io/users").success(function(response) {
        console.log("kasdjsa")
        // $scope.myWelcome = response.data;
    });*/
     $http.get("http://www.json-generator.com/api/json/get/cfRTXmUfVK?indent=2")
        .success(function(data) {
            $scope.names = eval(data);
            console.log($scope.names)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

/*
    $http({
        method : "GET",
        url : "http://demo4842709.mockable.io/users",


    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
         console.log("kasdjsa")
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
         console.log("kasdjsa")
         console.log(response.statusText)
    });
*/
        

       

         $scope.sectionId=0;
         $scope.vars= 0;
         $scope.sectionCount=0;

        $scope.sectionNumber = function(index){
            console.log(index);
            $scope.sectionId= index;
            $scope.vars=1;
            $scope.sectionChat= index;
            $scope.sectionCount=0;
        }

        $scope.sectionChat=0;
        $scope.buttonSend = function(){
            console.log("AAYA")
            console.log($scope.sectionChat)
            console.log($scope.chatmsg)
          $window.localStorage.setItem($scope.sectionChat,$scope.chatmsg)
          var dte = new Date();
          console.log(dte);

        var newEle = angular.element("<div class='col-xs-5 offset-xs-6' ><div class='media'><div style='float: right;'><span class='avatar avatar-online'><img class='media-object rounded-circle' style='width:50px; height: 50px;' src='https://randomuser.me/api/portraits/women/16.jpg'  alt='image'></span></div><div class='media-body bg-white p-1'><p>"+ $window.localStorage.getItem($scope.sectionChat)+"</p></div><span class='small text-muted'>"+dte+"</span></div></div>");
         var target = document.getElementById('myChats');
            angular.element(target).append(newEle);
          // for(var i in $scope.names){
          //   if($scope.names.id == $scope.sectionChat){
           
          // }  
          // }

          
        }


        
});

