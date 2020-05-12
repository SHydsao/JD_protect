//获取手机的商品
function getPhone(){
    $.get("../php/getGoodsList.php","typeId=001",function(datas){
        let htmlStr = "";
        datas.forEach(goods=>{
            htmlStr +=`
                <dl class="fl">
                    <dt>
                        <img src="${goods.goodsImg}" alt="">
                    </dt>
                    <dd>
                        <p>${goods.goodsDesc}</p>
                        <div>
                            <span class="fl">
                                 ￥${goods.goodsPrice}
                            </span>
                            <span class="fr">￥${goods.beiyong1}</span>
                        </div>
                    </dd>
                </dl>
                <div id="arrowleft">
                <span class="iconfont icon-zuojiantou"></span>
                </div>
                <div id="arrowright">
                    <span class="iconfont icon-youjiantou"></span>
                </div>
            `
        });
        $("#c_show2_t #center1").html(htmlStr);
    },"json");
}
$(function(){
    getPhone();
;})