var myData = require("../../utils/data")

Page({
    data:{
        province:myData.provinceData(),
        city:myData.cityData(),
        proviIndex:0,
        cityIndex:0,
        saveToastHidden:true,
        cancelToastHidden:true
    },
    onLoad:function(options){
        var init = myData.searchAddrFromAddrs(options.addrid)
        this.setData({
            data_name:init.name,
            data_phone:init.phone,
            data_province:init.province,
            data_city:init.city,
            data_addr:init.addr
        })
    },
    submitForm:function(e){
        console.log('保存成功')
        this.setData({
            saveToastHidden:false
        })},
        
    hideToast:function(){
        this.setData({
            saveToastHidden:true,
        })
    }

 
    
})