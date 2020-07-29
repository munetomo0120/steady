// $(function(){
//   function buildComment(comment) {
//     let html = `<tr>
//     <td width="35px">
//     ${comment.id}
//     </td>
//     <td width="100px">
//     <a href="/users/${comment.user_id}">${comment.user_name}
//     </a></td>
//     <td width="200px">
//     ${comment.text}
//     </td>
//     <td>
//     <img src="/uploads/comment/image/${comment.image_url}">
//     </td>
//     <td>
//     ${comment.created_at}
//     </td>
//     <td width="80px">
//     <a data-confirm="削除しますか？" rel="nofollow" data-method="delete" href="/posts/31/comments/21">削除
//     </a></td>
//     </tr>`

//     return html
//   }
//   // function buildHTML(comment) {
//   //   let html = `<tr>
//   //                 <td width="35px">
//   //                 ${comment.id}
//   //                 </td>
//   //                 <td width="100px">
//   //                   <a href="/users/${comment.user.id}">${comment.user.name}
//   //                   </a>
//   //                 </td>
//   //                 <td width="200px">
//   //                 ${comment.text}
//   //                 </td>
//   //                 <td>
//   //                   <img src="/uploads/comment/image/${comment.image_url}" if comment.image.present?>
//   //                 </td>
//   //                 <td>
//   //                 ${comment.created_at.to_s}
//   //                 </td>
//   //               </tr>
//   //               `
//   //   return html;
//   // }
//   $('#new_comment').on('submit', function(e){
//     e.preventDefault();
//     let formData = new FormData(this);
//     let url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function (data) {
//       let html = buildComment(data)
//       console.log(html)
//       // let html = buildHTML(data);
//       // $('.comments').append(html);
//       // $('.textbox').val('');
//       // $('.imagebox').val('');
//       // $('.form__submit').prop('disabled', false);
//     })
//     // .fail(function () {
//     //   alert('Error');
//     // })
//   })
// });