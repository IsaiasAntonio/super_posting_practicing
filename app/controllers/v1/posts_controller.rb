module V1
  class PostsController < V1::ApplicationController
    before_action :find_post, only: %i[show update destroy]
    def index
      @posts = Post.all
    end

    def show
    end

    def destroy
      @post.destroy
    end

    def create
      @post = Post.new(post_params)
      if @post.save
        redirect_to @post
      else
        render 'new'
      end
    end

    def update
      render 'show' if @post.update(post_params) 
    end

    private
    def post_params
      params.require(:post).permit(:title, :text)
    end

    def find_post
      @post = Post.find(params[:id])
    end
  end
end
