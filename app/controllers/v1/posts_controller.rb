module V1
  class PostsController < V1::ApplicationController
    before_action :find_post, only: %i[show update destroy]
    before_action :authenticate_request!
    def index
      @posts = Post.all
    end

    def show; end

    def destroy
      @post.destroy
    end

    def create
      @post = Post.new(post_params)
      save_post
    end

    def update
      render 'show' if @post.update(post_params)
    end

    private

    def save_post
      @post.assign_attributes(post_params)
      if @post.save
        render 'show'
      else
        render(json: @post.errors, status: 400)
      end
    end

    def post_params
      params.require(:post).permit(:title, :text)
    end

    def find_post
      @post = Post.find(params[:id])
    end
  end
end
