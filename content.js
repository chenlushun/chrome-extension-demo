$(function () {
    // 读取sku的图片
    const skuList = $('.detail-gallery-img');
    const skuImgList = new Array(skuList.length)
    for (let i = 0; i < skuList.length; i++) {
        skuImgList.join(skuList[i].src)
        download(skuList[i].src, '窗口' + i + '.jpg')
    }
    const detailList = $('.content-detail img');
    const detailImgList = new Array(detailList.length)
    for (let i = 0; i < detailImgList.length; i++) {
        detailImgList.join(detailList[i].src)
        download(skuList[i].src, '详情' + i + '.jpg')
    }
    console.log(img)
})

//下载
function download(url, fileName) {
    //图片的地址
    fetch(url)
        // 获取 blob 对象
        .then(res => res.blob())
        .then(blob => {
            // 创建a标签
            var link = document.createElement('a');
            // 设置a标签为不可见
            link.style.display = 'none';
            // 将a标签添加到body
            document.body.appendChild(link);
            // 生成Blob URL并设置给a标签的href属性
            var url = window.URL.createObjectURL(blob);
            link.href = url;
            // 设置a标签的download
            link.download = fileName;
            // 模拟点击事件进行下载
            link.click();
            //下载完成后清理URL对象和a标签
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        })
}