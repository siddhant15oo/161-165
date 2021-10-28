AFRAME.registerComponent("bullets",{
    
    init:function(){
        this.shootBullet();
    },

    removeBullet:function(e){
      console.log(e.detail.target.el)
      console.log(e.detail.body.el)

      var element=e.detail.target.el
      var elementHit=e.detail.body.el

      if(elementHit.id.includes('box')){
          elementHit.setAttribute('material',{
              opacity:1,
              transparent:true
            })

            //var impulse=new CANNON.Vec3()
            //removing event listener
            element.removeEventListener('collide',this.shootBullet)

            var scene=document.querySelector('#scene')
            scene.removeChild(element)
      }
    },

    shootBullet:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "z"){

                var bullet = document.createElement("a-entity");

                bullet.setAttribute("geometry",{
                    primitive :"sphere",
                    radius :0.1
                });

                bullet.setAttribute("material","color","black");

                var camera=document.querySelector('#camera-rig')
                pos= camera.getAttribute('position')
                bullet.setAttribute("position",{
                    x: pos.x,
                    y:pos.y+1,
                    z:pos.z-0.3
                })

                var cam = document.querySelector("#camera");

                pos =  cam.getAttribute("position");

                bullet.setAttribute("position",{
                    x: pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector("#camera").object3D;
                var direction = new THREE.Vector3();

                console.log(direction);
                camera.getWorldDirection(direction);

                // console.log('hi')
                bullet.setAttribute("velocity", direction.multiplyScalar(-10));

                bullet.setAttribute('dynamic-body',{
                    shape:'sphere',
                    mass:0
                })

                var scene = document.querySelector("#scene");

                
                bullet.addEventListener('collide',this.removeBullet)

                scene.appendChild(bullet);
                this.shootSound()
            }
        })
    },
    shootSound: function () {
        var entity = document.querySelector("#sound1");
        entity.components.sound.playSound();
      },
})