// pages/login/login.js
Page({


    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        function color (){
            let color = Math.round(Math.random()*255-0.5).toString(16);
            if(color.length!= 2){
                color = 0+color;
            }
            return(color);
        }
        let col1 = color()+color()+color();
        let col2 = color()+color()+color();
        let col3 = color()+color()+color();
        let col4 = color()+color()+color();
        let col5 = color()+color()+color(); 
        this.setData({
            col1,
            col2,
            col3,
            col4,
            col5
            
        })
        return col1;
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})