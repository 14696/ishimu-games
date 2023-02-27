"use strict";

const WIDTH = 720;
const HEIGHT = 540;
const MESH = 32;
var fps = 10;
var gStyle = "#00ffff";
var gX = MESH * 10;
var gY = MESH * 8;
var P_SPEAD = 8;
var key;
var gKey = [];

let gImageMap;
let gPlayer;

function draw()
{
    let g = document.getElementById( "main" ).getContext( "2d" );

    g.fillStyle = "#000000";
    g.fillRect( 0, 0, WIDTH, HEIGHT ); 
    
    for( let x = 0; x < 23; x++ ){
        for( let y = 0; y < 17; y++ ){
                g.drawImage( gImageMap, x * 32, y * 32, 32, 32 );
        }
    }
    //g.fillStyle = gStyle;
    //g.fillRect( gX, gY, MESH, MESH );
    g.drawImage( gPlayer, gX, gY, MESH * 2, MESH * 2 );

    g.fillStyle = "#ffffff";

    g.font = "36px monospacce";
    g.fillStyle = "#ffffff";
    g.fillText( "testplay",300, 50 );
}

function onPaint()
{
    if( gKey[37] ){
        gX -= P_SPEAD;
    }
    if( gKey[39] ){
        gX += P_SPEAD;
    }
    if( gKey[38]){
        gY -= P_SPEAD;
    }
    if( gKey[40] ){
        gY += P_SPEAD;
    }
}

window.onkeydown= function( ev )
{
    gKey[ ev.keyCode ] = true;
}

window.onkeyup = function( ev )
{    
    gKey[ ev.keyCode ] = false;  
}

window.onload=function()
{ 
    gImageMap = new Image();
    gImageMap.src = "map.png";
    gImageMap.onload = function()
    {
        let g = document.getElementById( "main" ).getContext( "2d" );

        g.imageSmothingEnbied = g.msImageSmoothingEnbied = false;        
        draw();
    }
    gPlayer = new Image();
    gPlayer.src = "kurun.jpg";
    //gPlayer.onload = function()
    {
        let g = document.getElementById( "main" ).getContext( "2d" );

        g.imageSmothingEnbied = g.msImageSmoothingEnbied = false;        
        draw(); 
    }
    setInterval( function() { draw()}, fps);
	setInterval( function() { onPaint()}, fps );
}
