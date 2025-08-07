import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CollapseSidebar {
  collapsed = signal(false)

  toggle() {
    this.collapsed.set(!this.collapsed())
  }
}
