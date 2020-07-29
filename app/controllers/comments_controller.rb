class CommentsController < ApplicationController
  def create
    comment = Comment.create(comment_params)
    redirect_to "/posts/#{comment.post.id}"
    # respond_to do |format|
    #   format.html { redirect_to "/posts/#{@comment.post.id}" }
    # end
  end

  def destroy
    comment = Comment.destroy(params[:id])
    redirect_to "/posts/#{comment.post.id}"
  end
  

  private

  def comment_params
    params.require(:comment).permit(:text, :image).merge(user_id: current_user.id, post_id: params[:post_id])
  end
  
  
end
