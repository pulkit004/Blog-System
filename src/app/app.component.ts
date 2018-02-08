import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  Title: string;
  Content: string;
}

interface PostId extends Post {
  id: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  postsCollection: AngularFirestoreCollection<Post>;
  blogPosts: any;

  Title: string;
  Content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCollection = this.afs.collection('blogPosts');
    // this.blogPosts = this.postsCollection.valueChanges();
    this.blogPosts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, data};
        });
      });
  }

  addPost() {
    // this.afs.collection('blogPosts').add({ 'Title': this.Title, 'Content': this.Content});
    this.afs.collection('blogPosts').add({ 'Title': this.Title, 'Content': this.Content});
  }

  getPost(postId) {
    this.postDoc = this.afs.doc('blogPosts/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('blogPosts/' + postId).delete();
  }
}
