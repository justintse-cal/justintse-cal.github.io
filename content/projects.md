---
title: 'Projects'
date: 2024-05-19
type: landing

design:
  spacing: '5rem'

sections:
  - block: collection
    content:
      title: Selected Projects
      text: >
        Welcome to the project gallery. Here you can see a variety of projects compiled from
        school, personal, and professional work to get inspired! Projects titled with * are group projects.
      filters:
        folders:
          - project
      sort:
        by: weight
        order: asc

      filter_button:
        - name: All
          tag: '*'
        - name: School
          tag: School
        - name: Personal
          tag: Personal
      filter_default: 0

    design:
      view: article-grid
      fill_image: false
      columns: 3
---