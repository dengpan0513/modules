/**
 * 无限轮播思路
 * 页面上有4个图片，分别为图片1、图片2、图片3、图片4
 * 当点击 next 按钮时，图片的显示区域由图片1到图片2，再点击 next 按钮时，从图片2到图片3
 * 当显示区域是图片4的时候，再次点击 next 按钮时，这个时候显示区域应该出现图片1
 * 这里的处理方法是：在显示页面的时候就把图片1克隆一个到图片4的后面，这样就能显示图片1，同时通过修改css，将真正的图片1显示
 * 对于 pre 按钮也是一样的，当要从图片1显示图片4的时候，在显示页面的时候就克隆图片4的备份到图片1的前面
 * 同时修改css，将真正的图片4显示
 * 这样就是一个完整的无限轮播
 */
