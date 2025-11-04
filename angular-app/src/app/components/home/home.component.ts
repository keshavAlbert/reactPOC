import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import type { SharedState } from '../../../../../shared/state';
import { SharedStateFacade } from '../../shared-state/shared-state.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  sidebarItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'versions', label: 'Versions' },
    { id: 'collaborators', label: 'Collaborators' }
  ];

  selectedId = 'overview';
  sharedState: SharedState | null = null;
  angularNoteTitle = '';
  angularNoteDescription = '';

  private subscription?: Subscription;

  constructor(private readonly state: SharedStateFacade) {
    this.syncFromState(this.state.snapshot);
  }

  ngOnInit(): void {
    this.subscription = this.state.state$.subscribe((value: SharedState) => {
      this.syncFromState(value);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSidebarSelect(evt: CustomEvent<{ id: string }>) {
    const nextId = evt.detail.id;
    this.selectedId = nextId;
    this.state.setSelectedSection(nextId);
  }

  onAngularTitleChange(value: string) {
    if (this.sharedState?.form.title !== value) {
      this.state.updateForm({ title: value });
    }
  }

  onAngularDescriptionChange(value: string) {
    if (this.sharedState?.form.description !== value) {
      this.state.updateForm({ description: value });
    }
  }

  private syncFromState(state: SharedState) {
    this.sharedState = state;
    this.selectedId = state.selectedSection;
    this.angularNoteTitle = state.form.title;
    this.angularNoteDescription = state.form.description;
  }
}
