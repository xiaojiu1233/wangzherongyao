//等待dom执行完毕最后执行
$(document).ready(function () {


    // 鼠标悬浮，面板展开
    $(".SubMenu").slideUp();//进入后自动关闭，（解决进入默认下拉状态）
    $('.jplm2').hide();
    $('.jplm3').hide();
    $('.jplm4').hide();
    $('.jplm5').hide();
    $('.jplm1').children('li').children('div').hide();
    $('.jplm2').children('li').children('div').hide();
    $('.jplm3').children('li').children('div').hide();
    $('.jplm4').children('li').children('div').hide();
    $('.jplm5').children('li').children('div').hide();
    $('.datuxia_text1').hide();
    $('.datuxia_text2').hide();
    $('.datuxia_text3').hide();
    $('.datuxia_text4').hide();
    $('#tab_list_1_1').addClass('current');


    // ************鼠标悬浮下拉面板模块*****************
    // 当事件处于打开状态时，无法触发新的事件
    $(".ul_box_start li").hover(function () {//当点击DIV
        $(".SubMenu").slideDown("100");//鼠标点击色块，执行下拉
    });

    $(".Box").hover(function () {//当鼠标离开色块(Box)
        $(".SubMenu").stop().slideUp("100");//鼠标离开色块，执行上拉
    });





    //定义：当鼠标悬浮于li上时，将背景设为黄色
    $('.ul_box_start li').hover(function () {
        $(this).toggleClass("styles");

        //将li中的ZH文字颜色设置为黄色
        $(".ul_box_start li").hover(function () {
            $(this).children('a').css('color', '#eec254');
        },
            function () {
                $(this).children('a').css('color', '#c9c9dd');
            }
        );
    });


    // 将li中的EN文字颜色设置为黄色
    $(".ul_box_start li").hover(function () {
        $(this).children('a').children('p').css('color', '#eec254');
    },
        function () {
            $(this).children('a').children('p').css('color', '#c9c9dd');
        }
    );

    //顶部广告条
    $(".banner,.Banner_Sub a img").hover(function () {
        $('.Banner_Sub').children('a').children('img').css('display', 'block');

    },
        function () {
            $('.Banner_Sub').children('a').children('img').css('display', 'none');

        }
    );


    //腾讯游戏排行榜
    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").mousedown(function () {//当点击DIV
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJOud.png");
        $('.Rangliste_Sub').css('display', 'block');
    });

    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").hover(function () {//当鼠标离开色块(Box)
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJadQ.png");
        $('.Rangliste_Sub').css('display', 'none');
    });

    $(".Rangliste,.Rangliste p,.Rangliste img,.Rangliste_Sub").hover(function () {
        $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJOud.png");
        $('.Rangliste_Sub').css('display', 'block');

    },
        function () {
            $('.Rangliste img').attr("src", "https://s1.328888.xyz/2022/05/13/qJadQ.png");
            $('.Rangliste_Sub').css('display', 'none');
        }
    );

    //固定的小妲己下面的微博/微信/视频号鼠标悬浮效果
    //微博
    $('.micro_blog').hover(function () {
        $('.micro_blog').css('background-position', '-123px 329px')
        $('.micro_blog_Sub').css('display', 'block')
    },
        function () {
            $('.micro_blog').css('background-position', '-123px 450px');
            $('.micro_blog_Sub').css('display', 'none')
        }
    );
    // 微信
    $('.WeChat').hover(function () {
        $('.WeChat').css('background-position', '-123px 370px')
        $('.WeChat_Sub').css('display', 'block')
    },
        function () {
            $('.WeChat').css('background-position', '-123px 410px');
            $('.WeChat_Sub').css('display', 'none')
        }
    );

    // 视频号
    $('.Video_Number').hover(function () {
        $('.Video_Number').css('background-position', '-123px 528px')
        $('.Video_Number_Sub').css('display', 'block')
    },
        function () {
            $('.Video_Number').css('background-position', '-123px 570px');
            $('.Video_Number_Sub').css('display', 'none')
        }
    );


    // 当鼠标悬浮在选项卡中，设置样式
    $('.Content_Rotation_map_txt ul li').hover(function () {
        $('.Content_Rotation_map_txt ul li').css('color', '#b1b2be')
        $('.Content_Rotation_map_txt ul li').removeClass('Content_Rotation_map_txt_border')
        $(this).css('color', '#f3c258')
        $(this).addClass('Content_Rotation_map_txt_border')
    });
    //主页轮播图
    $('#one').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(0px,0)')

    })
    $('#tow').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-608px,0)')
    })
    $('#three').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-1216px,0)')
    })
    $('#four').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-1824px,0)')
    })
    $('#five').mouseover(function () {
        $('.Content_Rotation_map_img_img').css('transform', 'translate(-2432px,0)')
    })

    // 当鼠标悬浮在选项卡中，设置样式
    $('.News_tab_text ul div li').hover(function () {
        $('.News_tab_text ul li').css('color', '#b1b2be')
        $('.News_tab_text ul li').removeClass('News_tab_text_border')
        $(this).css('color', '#f3c258')
        $(this).addClass('News_tab_text_border')
    });

    //当鼠标悬浮在选项卡中，滑动卡片
    $('#six').mouseover(function () {
        $('.News_tab').css('transform', 'translate(0px,0)')

    })
    $('#seven').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-330px,0)')
    })
    $('#eight').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-660px,0)')
    })
    $('#nine').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-985px,0)')
    })
    $('#ten').mouseover(function () {
        $('.News_tab').css('transform', 'translate(-1313px,0)')
    })
    $('.Notice span:last-child').css('float', 'right')


    // tab栏切换test-start
    //获取元素
    var tab_list = document.querySelector('.tab_list');//获取最顶部的一栏
    var lis = tab_list.querySelectorAll('li');//获取所有的li
    var items = document.querySelectorAll('.item');//获取所有的内容
    //for循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
        //开始给5个小li  设置索引号
        lis[i].setAttribute('index', i);
        lis[i].onmouseover = function () {
            //1.模块选项卡， 点击某一个， 当前这一个底色会是蓝色 其余不变（排他思想）修改类名的方式
            //干掉所有人  其余的li清除 class  这个类
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            //留下我自己
            this.className = 'current';
            //2.下面的显示内容模块
            var index = this.getAttribute('index');
            console.log(index);
            //干掉所有人 让其他的item 这些div隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            //留下我自己  让对应的item显示出来
            items[index].style.display = 'block';
        }
    }
    // tab栏切换test-end


    //上
    $(".tab_list_ul").children('li').mouseover(function () {
        $('.tab_list_ul').children('li').css("color", "#575757");
        $(this).css("color", "black");
    });
    //下
    $(".jplmtab_div").children('li').mouseover(function () {
        $('.jplmtab_div').children('li').children('h4').removeClass("current_h4");
        $(this).children('h4').addClass("current_h4");
    });
    //第二页下
    $(".jplmtab_div_2").children('li').mouseover(function () {
        $('.jplmtab_div_2').children('li').children('h4').removeClass("current_h4_2");
        $(this).children('h4').addClass("current_h4_2");
    });
    //精品栏目视频区
    $('.jplm_1').hover(function () {
        $('.jplm1').show();
        $('.jplm2').hide();
        $('.jplm3').hide();
        $('.jplm4').hide();
        $('.jplm5').hide();
    });
    $('.jplm_2').hover(function () {
        $('.jplm1').hide();
        $('.jplm2').show();
        $('.jplm3').hide();
        $('.jplm4').hide();
        $('.jplm5').hide();
    });
    $('.jplm_3').hover(function () {
        $('.jplm1').hide();
        $('.jplm2').hide();
        $('.jplm3').show();
        $('.jplm4').hide();
        $('.jplm5').hide();
    });
    $('.jplm_4').hover(function () {
        $('.jplm1').hide();
        $('.jplm2').hide();
        $('.jplm3').hide();
        $('.jplm4').show();
        $('.jplm5').hide();
    });
    $('.jplm_5').hover(function () {
        $('.jplm1').hide();
        $('.jplm2').hide();
        $('.jplm3').hide();
        $('.jplm4').hide();
        $('.jplm5').show();
    });
    // 视频播放按钮的显示与隐藏1
    $(".jplm1_1").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd1').show();
        },
        function () {
            $('#playvd1').hide();
        }
    );
    $(".jplm1_2").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2').show();
        },
        function () {
            $('#playvd2').hide();
        }
    );
    $(".jplm1_3").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd3').show();
        },
        function () {
            $('#playvd3').hide();
        }
    );
    $(".jplm1_4").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd4').show();
        },
        function () {
            $('#playvd4').hide();
        }
    );
    $(".jplm1_5").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd5').show();
        },
        function () {
            $('#playvd5').hide();
        }
    );
    $(".jplm1_6").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd6').show();
        },
        function () {
            $('#playvd6').hide();
        }
    );
    $(".jplm1_7").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd7').show();
        },
        function () {
            $('#playvd7').hide();
        }
    );
    $(".jplm1_8").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd8').show();
        },
        function () {
            $('#playvd8').hide();
        }
    );
    // 视频播放按钮的显示与隐藏2
    $(".jplm2_1").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_1').show();
        },
        function () {
            $('#playvd2_1').hide();
        }
    );
    $(".jplm2_2").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2').show();
        },
        function () {
            $('#playvd2_2').hide();
        }
    );
    $(".jplm2_3").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_3').show();
        },
        function () {
            $('#playvd2_3').hide();
        }
    );
    $(".jplm2_4").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_4').show();
        },
        function () {
            $('#playvd2_4').hide();
        }
    );
    $(".jplm2_5").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_5').show();
        },
        function () {
            $('#playvd2_5').hide();
        }
    );
    $(".jplm2_6").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_6').show();
        },
        function () {
            $('#playvd2_6').hide();
        }
    );
    $(".jplm2_7").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_7').show();
        },
        function () {
            $('#playvd2_7').hide();
        }
    );
    $(".jplm2_8").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_8').show();
        },
        function () {
            $('#playvd2_8').hide();
        }
    );
    // 视频播放按钮的显示与隐藏3
    $(".jplm3_1").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_1').show();
        },
        function () {
            $('#playvd3_1').hide();
        }
    );
    $(".jplm3_2").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_2').show();
        },
        function () {
            $('#playvd3_2').hide();
        }
    );
    $(".jplm3_3").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_3').show();
        },
        function () {
            $('#playvd3_3').hide();
        }
    );
    $(".jplm3_4").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_4').show();
        },
        function () {
            $('#playvd3_4').hide();
        }
    );
    $(".jplm3_5").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_5').show();
        },
        function () {
            $('#playvd3_5').hide();
        }
    );
    $(".jplm3_6").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_6').show();
        },
        function () {
            $('#playvd3_6').hide();
        }
    );
    $(".jplm3_7").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_7').show();
        },
        function () {
            $('#playvd3_7').hide();
        }
    );
    $(".jplm3_8").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd3_8').show();
        },
        function () {
            $('#playvd3_8').hide();
        }
    );
    // 第二页
    // 视频播放按钮的显示与隐藏1
    $(".jplm2_1_1").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_1').show();
        },
        function () {
            $('#playvd2_1').hide();
        }
    );
    $(".jplm2_1_2").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_2').show();
        },
        function () {
            $('#playvd2_2').hide();
        }
    );
    $(".jplm2_1_3").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_3').show();
        },
        function () {
            $('#playvd2_3').hide();
        }
    );
    $(".jplm2_1_4").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_4').show();
        },
        function () {
            $('#playvd2_4').hide();
        }
    );
    $(".jplm2_1_5").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_5').show();
        },
        function () {
            $('#playvd2_5').hide();
        }
    );
    $(".jplm2_1_6").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_6').show();
        },
        function () {
            $('#playvd2_6').hide();
        }
    );
    $(".jplm2_1_7").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_7').show();
        },
        function () {
            $('#playvd2_7').hide();
        }
    );
    $(".jplm2_1_8").hover(
        function () {
            $('.jplm1').children('li').children('div').hide();
            $('#playvd2_8').show();
        },
        function () {
            $('#playvd2_8').hide();
        }
    );
    // 视频播放按钮的显示与隐藏2
    $(".jplm2_2_1").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_1').show();
        },
        function () {
            $('#playvd2_2_1').hide();
        }
    );
    $(".jplm2_2_2").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_2').show();
        },
        function () {
            $('#playvd2_2_2').hide();
        }
    );
    $(".jplm2_2_3").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_3').show();
        },
        function () {
            $('#playvd2_2_3').hide();
        }
    );
    $(".jplm2_2_4").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_4').show();
        },
        function () {
            $('#playvd2_2_4').hide();
        }
    );
    $(".jplm2_2_5").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_5').show();
        },
        function () {
            $('#playvd2_2_5').hide();
        }
    );
    $(".jplm2_2_6").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_6').show();
        },
        function () {
            $('#playvd2_2_6').hide();
        }
    );
    $(".jplm2_2_7").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_7').show();
        },
        function () {
            $('#playvd2_2_7').hide();
        }
    );
    $(".jplm2_2_8").hover(
        function () {
            $('.jplm2').children('li').children('div').hide();
            $('#playvd2_2_8').show();
        },
        function () {
            $('#playvd2_2_8').hide();
        }
    );
    // 视频播放按钮的显示与隐藏3
    $(".jplm2_3_1").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_1').show();
        },
        function () {
            $('#playvd2_3_1').hide();
        }
    );
    $(".jplm2_3_2").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_2').show();
        },
        function () {
            $('#playvd2_3_2').hide();
        }
    );
    $(".jplm2_3_3").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_3').show();
        },
        function () {
            $('#playvd2_3_3').hide();
        }
    );
    $(".jplm2_3_4").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_4').show();
        },
        function () {
            $('#playvd2_3_4').hide();
        }
    );
    $(".jplm2_3_5").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_5').show();
        },
        function () {
            $('#playvd2_3_5').hide();
        }
    );
    $(".jplm2_3_6").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_6').show();
        },
        function () {
            $('#playvd2_3_6').hide();
        }
    );
    $(".jplm2_3_7").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_7').show();
        },
        function () {
            $('#playvd2_3_7').hide();
        }
    );
    $(".jplm2_3_8").hover(
        function () {
            $('.jplm3').children('li').children('div').hide();
            $('#playvd2_3_8').show();
        },
        function () {
            $('#playvd2_3_8').hide();
        }
    );
    // 视频播放按钮的显示与隐藏4
    $(".jplm2_4_1").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_1').show();
        },
        function () {
            $('#playvd2_4_1').hide();
        }
    );
    $(".jplm2_4_2").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_2').show();
        },
        function () {
            $('#playvd2_4_2').hide();
        }
    );
    $(".jplm2_4_3").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_3').show();
        },
        function () {
            $('#playvd2_4_3').hide();
        }
    );
    $(".jplm2_4_4").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_4').show();
        },
        function () {
            $('#playvd2_4_4').hide();
        }
    );
    $(".jplm2_4_5").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_5').show();
        },
        function () {
            $('#playvd2_4_5').hide();
        }
    );
    $(".jplm2_4_6").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_6').show();
        },
        function () {
            $('#playvd2_4_6').hide();
        }
    );
    $(".jplm2_4_7").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_7').show();
        },
        function () {
            $('#playvd2_4_7').hide();
        }
    );
    $(".jplm2_4_8").hover(
        function () {
            $('.jplm4').children('li').children('div').hide();
            $('#playvd2_4_8').show();
        },
        function () {
            $('#playvd2_4_8').hide();
        }
    );

    // 视频播放按钮的显示与隐藏5
    $(".jplm2_5_1").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_1').show();
        },
        function () {
            $('#playvd2_5_1').hide();
        }
    );
    $(".jplm2_5_2").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_2').show();
        },
        function () {
            $('#playvd2_5_2').hide();
        }
    );
    $(".jplm2_4_5").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_3').show();
        },
        function () {
            $('#playvd2_5_3').hide();
        }
    );
    $(".jplm2_5_4").hover(
        function () {
            $('.jplm').children('li').children('div').hide();
            $('#playvd2_5_4').show();
        },
        function () {
            $('#playvd2_5_4').hide();
        }
    );
    $(".jplm2_5_5").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_5').show();
        },
        function () {
            $('#playvd2_5_5').hide();
        }
    );
    $(".jplm2_5_6").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_6').show();
        },
        function () {
            $('#playvd2_5_6').hide();
        }
    );
    $(".jplm2_5_7").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_7').show();
        },
        function () {
            $('#playvd2_5_7').hide();
        }
    );
    $(".jplm2_5_8").hover(
        function () {
            $('.jplm5').children('li').children('div').hide();
            $('#playvd2_5_8').show();
        },
        function () {
            $('#playvd2_5_8').hide();
        }
    );


    $('.tab_list_1').hover(function () {
        $('.tab_list_1').removeClass('current');
        $(this).addClass('current');
    })
    $('.datuxia_img').hover(function () {
        $('.datuxia_text1').show();
        $('.datuxia_text2').show();
        $('.datuxia_text3').show();
        $('.datuxia_text4').show();
        $(this).siblings('div').children('h3').hide();
    }, function () {
        $('.datuxia_text1').hide();
        $('.datuxia_text2').hide();
        $('.datuxia_text3').hide();
        $('.datuxia_text4').hide();
    });
});
