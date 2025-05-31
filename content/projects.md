---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: collection
    content:
      title: Selected Projects
      text: Welcome to the project gallery. Here you can see a variety of projects compiled from school, personal, and professional work to get inspired! Projects titled with * are group projects.
      filters:
        folders:
          - project
      sort:
        by: weight
        order: asc
    design:
      view: article-grid
      fill_image: false
      columns: 3
    filter_button:
      - name: All
        tag: '*'
      - name: School
        tag: School
      - name: Personal
        tag: Personal
    # Default filter toolbar button (e.g. 0 corresponds to the first `filter_button` instance above)
    filter_default: 0
---