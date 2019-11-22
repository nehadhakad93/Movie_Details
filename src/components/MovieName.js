import React, { Component } from 'react';
import values from 'lodash/values';
import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';

const data = {
  '/ActorName1': {
    path: '/ActorName1',
    type: 'folder',
    isRoot: true,
    children: ['/ActorName1/2018', '/ActorName1/2019'],
  },
  '/ActorName1/2018': {
    path: '/ActorName1/2018',
    type: 'folder',
    children: ['/ActorName1/2018/movie 1','/ActorName1/2018/movie 2'],
  },
  '/ActorName1/2018/movie 1': {
    path: '/ActorName1/2018/movie 1',
    type: 'file',
    children: [],
  },
  '/ActorName1/2018/movie 2': {
    path: '/ActorName1/2018/movie 2',
    type: 'file',
    children: [],
  },
  
  '/ActorName1/2019': {
    path: '/ActorName1/2019',
    type: 'folder',
    children: ['/ActorName1/2019/movie 1','/ActorName1/2019/movie 2'],
  },
  '/ActorName1/2019/movie 1': {
    path: '/ActorName1/2019/movie 1',
    type: 'file',
    children: [],
  },
  '/ActorName1/2019/movie 2': {
    path: '/ActorName1/2019/movie 2',
    type: 'file',
    children: [],
  },

  //second data
  '/ActorName2': {
    path: '/ActorName2',
    type: 'folder',
    isRoot: true,
    children: ['/ActorName2/2018', '/ActorName2/2019'],
  },
  '/ActorName2/2018': {
    path: '/ActorName2/2018',
    type: 'folder',
    children: ['/ActorName2/2018/movie 1','/ActorName2/2018/movie 2'],
  },
  '/ActorName2/2018/movie 1': {
    path: '/ActorName2/2018/movie 1',
    type: 'file',
    children: [],
  },
  '/ActorName2/2018/movie 2': {
    path: '/ActorName2/2018/movie 2',
    type: 'file',
    children: [],
  },
  
  '/ActorName2/2019': {
    path: '/ActorName2/2019',
    type: 'folder',
    children: ['/ActorName2/2019/movie 1','/ActorName2/2019/movie 2'],
  },
  '/ActorName2/2019/movie 1': {
    path: '/ActorName2/2019/movie 1',
    type: 'file',
    children: [],
  },
  '/ActorName2/2019/movie 2': {
    path: '/ActorName2/2019/movie 2',
    type: 'file',
    children: [],
  },
 
};

export default class MovieName extends Component {
  state = {
    nodes: data,
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  }

  getChildNodes = (node) => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  }  

  onToggle = (node) => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  }

  onNodeSelect = node => {
    console.log('node',node)
    const { onSelect } = this.props;
    onSelect(node);
  }

  render() {
    const rootNodes = this.getRootNodes();
    return (
      <div>
        { rootNodes.map(node => (
          <MovieDetails 
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

MovieName.propTypes = {
  onSelect: PropTypes.func.isRequired,
};