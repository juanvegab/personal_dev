'use strict';

describe('Directive: myDirective', function () {
  beforeEach(module('YeomanTestApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<my-directive></my-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the myDirective directive');
  }));
});
