g.clear();
g.setColor(0,0,0);
g.fillRect(0, 20, 88, 100);
//g.setColor(0,0,255);
g.fillRect(88, 20, 200, 100);
//g.setColor(0,255,0);
g.fillRect(88, 100, 200, 200);
//g.setColor(255,255,0);
g.fillRect(0, 100, 88, 200);


Bangle.on('touch', function(button, xy) {
  if (xy.x < 88 && xy.y < 100) {
    print("button up/left "+xy.x+" "+xy.y);
  } else if (xy.x < 88 && xy.y > 100) {
    print("button down/left "+xy.x+" "+xy.y);
  } else if (xy.x > 88 && xy.y < 100) {
    print("button up/right "+xy.x+" "+xy.y);
  } else if (xy.x > 88 && xy.y > 100) {
    print("button down/right "+xy.x+" "+xy.y);
  } else {
  print("x/y "+xy.x+" "+xy.y); }});

var img = E.toArrayBuffer(atob("Mi6BAf//////////8A//////+fB//////PvD/////34OP////9/44/////B/jn////3D+ef///9+H9z///+f8f/f///v/x/5///zj/P/P//9zP8/5//+Z7/n/P//u+e+f5//zP3nz/f/9z58+f7/+c+/v5+f/vgP//OH/z8P//7J/9n///vHP/d//Bzxz/vf/nM+c/7n777vnP8/+++/jn/f/3vvzz/n//5zx5/74//Bx4/85z//x4//e+8f44//3vuX54//57zv54//++d/84///Pwf/Y///2+fnw///5n/w4///+8/9mf///P/jRn///3/gQZ///5/jl2f//+/Dhdn///mHHHZ///4PHx2f//+OH/8n///wP//D///////5///8A=="));
g.drawImage(img,26,40);

var img2 = E.toArrayBuffer(atob("Nx6BAf/////////////////////////////////////4AD//gH//x/wAABx//7/////+f/5//////D/wAB//wAAPz/gAAAf/z38fn/+Hz9z8DA4MYA+598PBw//fc/4D///j/OfgAAAAAPPnH//wH/wf4P/////+f/P//////f/n//////n/zf/////z/9v/////7/+z/////5//M/////9//zD////8//88b///4///H////x///4P//+D////wAAAf/////+A/////////////wA=="));
g.drawImage(img2,105,45);

var img3 = E.toArrayBuffer(atob("KCyCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFVQAAAAAAAAVUBAEFAAAAAAAEBVQBRFUAAAAABAQEBVQBAAAAFRVEBVUEBVEAAUEQRAQFBAQVUAEAUEQEBQQEBBQBAFBEBAQEBAQEAQBQQQQEBBQEEABAUEEEBAQUBBAAQBBBBAQUFAQQAEAQQRAQEBQEQABAEEEQEBBUFEABVVVVVVVVVVVAAQAAAAAAAAABUAEAAAAAAAAAABABAAAAAAAAAAAQAQAAAAAAAAAAEAEAAAAAAAAAABABAAAFVVVUAAAAAQAAFAAABUAAQAEAAEAAAABQAEABAAFAAAAAEABAAEABAAAAAAQAQABAARAAAAAEAEAAQAEQAAAABABAAEABEAAAAAQAQABAARAAAAAUAEAAQAEEAAAAEAAAAEAAQAAAAEABAAAQABQAAAFAAQAAEAABVVVUAAEAABAAAAAAAAABAAAQAAAAAAAAAQAAFAAAAAAAAAQAAAQAAAAAAAAEAAAEAAAAAAAAFAAABQAAAAAAABAAAAFUAAAAAAFAAAAAFVVVVVVUAAAAAAAAAAAAAAAA"));
g.drawImage(img3,112,113);

var img4 = E.toArrayBuffer(atob("MjCBAf//////////8AH/////4f8P////5//8f///5/vPx///877//P//++//78///f////n//u///88//zvv3v/n/9/////8/+//////n/P/////9/3//////P5//////7+7/////+ft//////nzf/////99n//////fZ//////3zD/////5+8/////+fn/////+P4AAAAAAJ8///////uf//////7n/7////A4H4MD/BAfwc4OPPHf8g//4P/3/O/////5/5/////4/8AB/wAAD+fAAAf/+fP//////33//////99///////fP//////n5//////z+AP///wB//gAAAAP///////////////////////////////////////////////////////////w=="));
g.drawImage(img4,26,116);
