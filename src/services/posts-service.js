export default class PostsService {
  constructor() {
    this.posts = [{
      id: 1,
      title: 'Post 1 Title',
      summary: '<p>Analog is playing at <a href="https://www.facebook.com/tankedatthetank" target="">The Tankard</a> this Saturday, with opening act Sean Daley.  Please come join as we prevew some of the new songs on the album.</p>',
      createdTime: 1472091258
    }, {
      id: 2,
      title: 'Post 2 Title',
      summary: 'Post 2 Summary',
      createdTime: 1471989627
    }, {
      id: 3,
      title: 'Post 3 Title',
      summary: 'Post 3 Summary',
      createdTime: 1471959311
    }]
  }

  getPosts(postId) {

    if(postId){

      return this.posts.filter((post) => {
        if(post.id === postId){
          return post;
        }
      })[0];

    }

    return this.posts;
  }

}