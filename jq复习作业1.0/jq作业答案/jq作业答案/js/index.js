$(function () {
  // 1. 点击页面【添加】按钮，显示出【模态框】；
  // 2. 为【模态框】内部【添加】按钮绑定事件；
  // 3. 获取【输入框】文本内容，并去掉两段空格；
  // 4. 判断文本内容是否为空，如果为空则做【alert】提示；
  //   1. 在根作用域定义一个全局列表【数组】；
  // 2. 创建一个获取本地【存储数据】的函数【getData】，将数据存储到全局【数
  // 组】中；
  // 3. 定义一个渲染函数【render】，使用【jQuery.each】遍历全局【数组】；
  // 4. 创建【jQuery对象】行，并将【数组】中的数据对象创建对应【jQuery对象】
  // 列，追加列到行中；
  // 5. 定义【更改】和【删除】按钮，追加到行中
  
  $('.button-add').on('click', function () {
    $('#addModal').modal('show')
  })
  //点击关闭，清空名字和电话
  $('#closed').on('click', function () {
    $('#uname').val('')
    $('#tel').val('')
  })
  //添加按钮，事件处理
  $('.button-user-add').on('click', function () {
    let arr = []
    var uname = $('#uname').val().trim()
    var tel = $('#tel').val().trim()
    if (!uname || !tel) { alert('输入内容不能为空') } else {
      var obj = {
        id: (+new Date()).toString().substring(8),
        uname: uname,
        tel: tel,
        status: '正常'
      }
      arr.push(obj)
      $.each(arr, function (i, item) {
        console.log(item)
        var tr = $('<tr></tr>')
        for (var key in item) {
          var td = $('<td></td>')
          td.html(item[key])
          tr.append(td)
        }
        console.log(td)
        var tds = $('<td><button type="button" class="btn btn-default">更改</button><button type="button" class="btn btn-default">删除</button></td>')
        tr.append(tds)
        $('.myTbody').append(tr)
      })
      $('#addModal').modal('hide')
      $('#uname').val('')
      $('#tel').val('')
    }

  })

})