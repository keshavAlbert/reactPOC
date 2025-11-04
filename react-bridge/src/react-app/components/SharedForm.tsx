import { FormEvent, useEffect, useState } from 'react';
import {
  SharedFormState,
  SharedState
} from '../../../../shared/state';
import { getOrCreateSharedStore } from '../../../../shared/store';

type FormProps = {
  heading?: string;
};

const store = getOrCreateSharedStore();

export function SharedForm({ heading = 'Shared Note' }: FormProps) {
  const [form, setForm] = useState<SharedFormState>(() => store.getState().form);
  const [selectedSection, setSelectedSection] = useState<string>(
    store.getState().selectedSection
  );

  useEffect(() => {
    return store.subscribe((state: SharedState) => {
      setForm(state.form);
      setSelectedSection(state.selectedSection);
    });
  }, []);

  function handleInputChange(event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = event.currentTarget;
    const { name, value } = target;
    store.updateForm({ [name]: value } as Partial<SharedFormState>);
  }

  return (
    <section className="react-shared-form">
      <header className="react-shared-form__header">
        <h2>{heading}</h2>
        <span className="react-shared-form__chip">{selectedSection}</span>
      </header>

      <label className="react-shared-form__label" htmlFor="react-shared-form-title">
        Title
      </label>
      <input
        id="react-shared-form-title"
        className="react-shared-form__input"
        name="title"
        value={form.title}
        onInput={handleInputChange}
      />

      <label
        className="react-shared-form__label"
        htmlFor="react-shared-form-description"
      >
        Description
      </label>
      <textarea
        id="react-shared-form-description"
        className="react-shared-form__textarea"
        name="description"
        value={form.description}
        onInput={handleInputChange}
        rows={5}
      />

      <footer className="react-shared-form__footer">
        <small>Last updated: {new Date(form.lastUpdated).toLocaleTimeString()}</small>
      </footer>
    </section>
  );
}
