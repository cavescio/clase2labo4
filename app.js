var angapp = angular.module("miapp",[]);

angapp.controller('contppt2',function($scope){
	$scope.eleccionMaquina="papel";
	$scope.empatadas=0;
	$scope.ganadas=0;
	$scope.perdidas=0;


	$scope.papel=function(){
		$scope.comenzar();
		alert("la maquina selecciono: "+$scope.eleccionMaquina);
		$scope.eleccionHumano="papel";
		if($scope.eleccionHumano==$scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		

		}
		else if($scope.eleccionMaquina=="piedra")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
		//alert("hola");
	}
	//$scope.papel();

	$scope.piedra=function(){
		$scope.comenzar();
		alert("la maquina selecciono: "+$scope.eleccionMaquina);
		$scope.eleccionHumano="piedra";
		if($scope.eleccionHumano==$scope.eleccionMaquina)
		{
			alert("empate.");	
			$scope.empatadas++;	
		}
		else if($scope.eleccionMaquina=="tijera")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	}

	$scope.tijera=function(){
		alert("la maquina selecciono: "+$scope.eleccionMaquina);
		$scope.eleccionHumano="tijera";
		if($scope.eleccionHumano==$scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		
		}
		else if($scope.eleccionMaquina=="papel")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	}

	$scope.comenzar=function(){

		//alert("hola");
		$scope.numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch($scope.numeroSecreto)
		{
			case 1:
				$scope.eleccionMaquina="piedra";
				break;
			case 2:
				$scope.eleccionMaquina="papel";
				break;
			case 3:
				$scope.eleccionMaquina="tijera";
				break;
		}
	}

	
});
