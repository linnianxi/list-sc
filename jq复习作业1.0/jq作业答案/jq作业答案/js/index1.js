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
  // let arr = [{ id: 1, uname: '学友', tel: '18289892892', status: '正常' }, { id: 2, uname: '德华', tel: '18289892892', status: '正常' }]
  let arr = JSON.parse(localStorage.getItem('arr')) || []
  renderData()
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
    //  arr = []
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
      localStorage.setItem('arr', JSON.stringify(arr))
      renderData()
      $('#addModal').modal('hide')
      $('#uname').val('')
      $('#tel').val('')
    }

  })

  //点击删除按钮，添加事件
  $('.myTbody').on('click', '.mydeleteBtn', function (e) {
    alert('确实删除这一个')
    let i = e.target.dataset.index
    // let idx = e.target.dataset.idx
    console.log(i)
    arr = JSON.parse(localStorage.getItem('arr')) || []
    arr.splice(i, 1)
    localStorage.setItem('arr', JSON.stringify(arr))
    renderData()
  })

  //渲染页面
  function renderData() {
    $('.myTbody').html('')
    $.each(arr, function (i, item) {
      // console.log(item)
      var tr = $('<tr></tr>')
      for (var key in item) {
        var td = $('<td></td>')
        td.html(item[key])
        tr.append(td)
      }
      //添加绑定自定义idx
      var tdTpl = `<td><button type="button" class="btn btn-sm myeditBtn">更改</button><button type="button" data-index=${i} data-idx=${item.id} class="btn btn-sm mydeleteBtn">删除</button></td>`
      var tds = $(tdTpl)
      tr.append(tds)
      $('.myTbody').append(tr)
    })
  }
})