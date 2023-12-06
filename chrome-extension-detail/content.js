$(function () {
    const detailList = $('.content-detail img');
    for (let i = 0; i < detailList.length; i++) {
        download($(detailList[i]).attr('data-lazyload-src'), '详情' + i + '.jpg')
    }
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