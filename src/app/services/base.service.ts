import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, QueryFn } from '@angular/fire/firestore';

export abstract class BaseService<T extends { uid?: string }> {
  protected itemsCollection: AngularFirestoreCollection<T>;

  protected constructor(protected collectionName,
                        protected afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection(this.collectionName);
  }

  findByUid(uid): Observable<T> {
    return this.itemsCollection.doc<T>(`${uid}`).snapshotChanges().pipe(map(a => {
      const item = a.payload.data();
      item.uid = a.payload.id;
      return item;
    }));
  }

  findAll(queryFn?: QueryFn): Observable<T[]> {
    return this.afs.collection(this.collectionName, queryFn).snapshotChanges().pipe(map(actions =>
      actions.map(a => {
        const item = a.payload.doc.data() as T;
        item.uid = a.payload.doc.id;
        return item;
      })));
  }

  save(item: T): Promise<void | DocumentReference> {
    return item.uid
      ? this.itemsCollection.doc(item.uid).update(item)
      : this.itemsCollection.add(item);
  }

  delete(id: string): Promise<void> {
    return this.itemsCollection.doc(id).delete();
  }

}
