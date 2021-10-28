AFRAME.registerComponent("wire_fence",{
    init:function(){
       posX=-20
       posZ=85

       for(var i = 0; i<10; i++){
           var wirefence = document.createElement("a-entity")
           var wirefence2 = document.createElement("a-entity");
           var wirefence3 = document.createElement("a-entity");
           var wirefence4 = document.createElement("a-entity");


           posX = posX+5;
           posY=2.5
           posZ=posZ-10

           var scale={x:2,y:2,z:2}
           wirefence.setAttribute('id','wirefence1'+i)
           wirefence2.setAttribute('id','wirefence2'+i)
           wirefence3.setAttribute('id','wirefence3'+i)
           wirefence4.setAttribute('id','wirefence4'+i)




           wirefence.setAttribute('position',{
               x:posX,
               y:2.5,
               z:-35
            })
           wirefence2.setAttribute('position',{
            x:posX,
            y:2.5,
            z:85
            })
           wirefence3.setAttribute('position',{
            x:-30,
            y:2.5,
            z:posZ
            })
           wirefence4.setAttribute('position',{
            x:50,
            y:2.5,
            z:posZ
            })

           wirefence.setAttribute('scale',scale)
           wirefence2.setAttribute('scale',scale)
           wirefence3.setAttribute('scale',scale)
           wirefence4.setAttribute('scale',scale)
           
           wirefence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
           wirefence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

           wirefence.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf')
           wirefence2.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf')
           wirefence3.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf')
           wirefence4.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf')

           wirefence.setAttribute('static-body',{})
           wirefence2.setAttribute('static-body',{})
           wirefence3.setAttribute('static-body',{})
           wirefence4.setAttribute('static-body',{})

           var sceneEl=document.querySelector('#scene')

           sceneEl.appendChild(wirefence)
           sceneEl.appendChild(wirefence2)
           sceneEl.appendChild(wirefence3)
           sceneEl.appendChild(wirefence4)
           
       }
    },




})


AFRAME.registerComponent("boxes", {
    schema: {
      height: { type: "number", default: 2 },
      width: { type: "number", default: 2},
      depth: { type: "number", default: 2 },
    },
    init: function () {
      px=[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
      pz=[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10]
      for (var i = 0; i < 20; i++) {
        var box = document.createElement("a-entity");
        posX=px[i]
        posY=1
        posZ=pz[i]
        box.setAttribute("id", "box" + i); 
  
        posX = Math.random()*200 -100;
        posY = 1.5;
        posZ =Math.random()*200 -100;
  
        position = { x: posX, y: posY, z: posZ };           
        box.setAttribute("position", position);
  
        box.setAttribute("geometry", {
          primitive: "box",
          height: this.data.height,
          width: this.data.width,
          depth: this.data.depth,
        });
  
        box.setAttribute("material", {
          src: "./images/boxtexture1.jpg",
          repeat: "1 1 1",
        });
  
        box.setAttribute("static-body", {});
        var sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(box);
      }
    },
  });
  