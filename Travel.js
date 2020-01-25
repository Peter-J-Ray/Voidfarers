//Travel Script

function calculatePath(x, y, z) {
   //vector (x, y, z) = (x_1, y_1, z_1) + t(x_2, y_2, z_2) where the given values of the function equal x_2, y_2, and z_2
        function totalDistance(d) {
    
        //Create variable which takes the distance of a star from the intital point.
        var distance = 1;
        return d/distance;
    }

    var d = totalDistance(1);
    
    var initialPoint = [0, 0, 0];
    
    return [initialPoint[0] + d*x, initialPoint[1] + d*y, initialPoint[2] + d*z];
};

var xValue = calculatePath(5, 0, 0);
var yValue = calculatePath(0, 7, 0);
var zValue = calculatePath(0, 0, -3);

var vectorDistance = [xValue, yValue, zValue];
