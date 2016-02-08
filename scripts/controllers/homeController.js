"use strict";

angular.module('upl-site').
    controller('HomeController', ['$scope', 'EventsFactory', 'ProjectsFactory', "LabFactory", function($scope, Events, Projects, Lab) {
        $scope.events = [];
        $scope.projects = [];

        Events.list().then(function(data) {
            $scope.events = data.Previous.slice(0, 3);
        }, function(data) {
            alert(data);
        });

        Projects.list().then(function(data) {
            var left = true;
            var row = 0;
            for (var i = 0; i < data.length; i++) {
                var d = data[i];
                if (d.description.length > 100) {
                    d.description = d.description.substring(0, 100) + "...";
                }
                if (left) {
                    $scope.projects.push([d]);
                    left = false;
                } else {
                    $scope.projects[row].push(d);
                    left = true;
                    row++;
                }
            }
        }, function(data) {
            alert(data);
        });

        $scope.sliderSettings = {
            value : (30 + 150)/2,
            options : {
                floor : 30,
                ceil : 150,
                step : 1,
                onEnd : function (id, val, highVal) {
                    Lab.setCameraPosition(val);
                }
            }
        };
    }]);
