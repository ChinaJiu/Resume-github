// $(function () {
    function onload() {
        var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
        var touchstart = mobile ? "touchstart" : "mousedown";
        var touchend = mobile ? "touchend" : "mouseup";
        var touchmove = mobile ? "touchmove" : "mousemove";


        $('.box2').show();

        var animateLineFront = new TimelineMax(),
            animateLineBack = new TimelineMax(),
            animateFront = new TimelineMax(),
            animateBack = new TimelineMax();

            animateLineFront.from('.l1',.3,{x:-640,y:-280})
            animateLineFront.from('.l2',.3,{x:643,y:-278})
            animateLineFront.from('.l3',.3,{x:-643,y:-278})
            animateLineFront.pause();

            animateLineBack.from('.l6',.3,{x:-640,y:280})
            animateLineBack.from('.l5',.3,{x:643,y:278})
            animateLineBack.from('.l4',.3,{x:-643,y:278})
            animateLineBack.pause();

            animateFront.staggerFrom('.resume,.introduce,.skill,.contact',2,{alpha:0,ease:Expo.easeOut},.3);
            animateFront.pause()

            animateBack.staggerFrom('.blog,.production2,.production1,.pro',2,{alpha:0,ease:Expo.easeOut},.3);
            animateBack.pause()

        $('.content').fadeIn(500,function () {

            // 初始化
            TweenMax.set('.l1,.l3',{rotation:23.3, transformOrigin: "0% 50%"})
            TweenMax.set('.l2',{rotation:-23.3, transformOrigin: "100% 50%"})

            TweenMax.set('.l5',{rotation:23.3, transformOrigin: "0% 50%"})
            TweenMax.set('.l4,.l6',{rotation:-23.3, transformOrigin: "100% 50%"})

            TweenMax.set('.box1,.box2',{scale:1})
            $('.box2').hide();

            var r = 0,  //box1旋转角度
                b = -180; //box2旋转角度



            TweenMax.set('.box2',{rotationY:-180})

            PageBack_90();

            var scene = new THREE.Scene();
            scene.background = new THREE.MeshBasicMaterial({color:0x00ee00,wireframe:true,transparent:true});
            var camera = new THREE.PerspectiveCamera(75, 200/200, 0.1, 1000 );
            var renderer = new THREE.WebGLRenderer({alpha:true});
            renderer.setClearAlpha(0);
            renderer.setSize( 200, 200 );
            $('.blog-body').append( renderer.domElement );

            var geometry_csdn = new THREE.BoxGeometry( 40, 40, 40 );
            var createTexture_csdn = new THREE.ImageUtils.loadTexture('./images/csdn.jpg');
            var material_csdn = new THREE.MeshBasicMaterial( { map: createTexture_csdn, overdraw: 0.5 } );
            var cube_csdn = new THREE.Mesh( geometry_csdn, material_csdn );
            cube_csdn.position.x = -50;
            scene.add( cube_csdn );

            var geometry_git = new THREE.BoxGeometry( 40, 40, 40 );
            var createTexture_git = new THREE.ImageUtils.loadTexture('./images/github.jpg');
            var material_git = new THREE.MeshBasicMaterial( { map: createTexture_git, overdraw: 0.5 } );
            var cube_git = new THREE.Mesh( geometry_git, material_git );
            cube_git.position.x = 50;
            scene.add( cube_git );
            camera.position.z = 150;


            function animate() {
                requestAnimationFrame( animate );
                // csdn
                cube_csdn.rotation.x += 0.05;
                cube_csdn.rotation.y += 0.05;
                // git
                cube_git.rotation.x -= 0.05;
                cube_git.rotation.y -= 0.05;

                renderer.render( scene, camera );
            }
            animate();


            // csdn
            $('.b1').on(touchstart,function (e) {
                e.stopPropagation();
                location.href = 'http://blog.csdn.net/qq_31301099'
            })

            // github
            $('.b2').on(touchstart,function (e) {
                e.stopPropagation();
                location.href = 'https://github.com/ChinaJiu'
            })

            $('.content').on(touchstart,function () {
                TweenMax.to('.content',.3,{scale:.3,onComplete:function () {
                    TweenMax.to('.box2',.5,{rotationY:b += 90,ease:Linear.easeNone})
                    TweenMax.to('.box1',.5,{rotationY:r += 90,ease:Linear.easeNone,onComplete:function () {
                        BoxDisplay('.box1') == 'block' ? PageFront_90() : PageBack_90();
                        TweenMax.to('.box2',.5,{rotationY:b += 90,ease:Linear.easeNone})
                        TweenMax.to('.box1',.5,{rotationY:r += 90,ease:Linear.easeNone,onComplete:function () {
                            TweenMax.to('.content',.3,{scale:1,onComplete:function () {
                                BoxDisplay('.box1') == 'block' ? PageFront_180() : PageBack_180()
                            }})
                        }})
                    }})
                }})
            })


            // 返回对象display属性
            function BoxDisplay(obj) {
                return $(obj).css('display');
            }
            // 旋转180后 前面动画
            function PageFront_180() {

            }
            // 旋转180后 后面动画
            function PageBack_180() {

            }

            // 旋转90后 前面动画
            function PageFront_90() {
                animateLineBack.restart();
                animateBack.restart();
                $('.box1').hide();
                $('.box2').show();
            }
            // 旋转90后 后面动画
            function PageBack_90() {
                animateLineFront.restart();
                animateFront.restart();
                $('.box2').hide();
                $('.box1').show();
            }

            // $('.pro-ewm-1,.pro-ewm-2').on(touchstart,function (e) {
            //     e.stopPropagation();
            // })

            $('.pro-ewm-1').on(touchstart,function (e) {
               e.stopPropagation();
                location.href = 'http://h5.trando9.cn/32/index.html'
            })
            $('.pro-ewm-2').on(touchstart,function (e) {
               e.stopPropagation();
				location.href = 'http://test.trando.com.cn/xiaojiu/Valentin_Day/'
            })
        })



    }

// })