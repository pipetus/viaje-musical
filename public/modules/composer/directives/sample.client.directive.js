'use strict';

angular.module('composer').directive('sample', ['composer', 'TracksConfig', '_',
	function(composer, TracksConfig, _) {
		return {
			templateUrl: '/modules/composer/views/sample.client.directive.html',
			restrict: 'E',
			scope: {
				instrument: '=',
				sample: '=',
				track: '=',
			},
			link: function postLink(scope, element, attrs) {
				var instrumentName = scope.instrument.toLowerCase(),
					gridSelector = '.track-grid.' + instrumentName + ' .track-grid-inner',
					tracked = scope.track !== undefined;
				angular.extend(scope, {
					indexer: function() {
		        var samples = _.where(TracksConfig.byName(scope.instrument).samples, 
		        	{ beats: scope.sample.beats, group: scope.sample.group });
		        var sample = _.findWhere(samples, { file: scope.sample.file, beats: scope.sample.beats });
		        return new Array(samples.indexOf(sample));
		      },
					gridOffset: function() {
						return angular.element(gridSelector).offset();
					},
					dragToGrid: function(event, ui) {
						var helper = angular.element(ui.helper),
							offset = scope.gridOffset(),
							beatSize = composer.grid.beatSize,
							magicNumber = tracked ? 0 : 16;
						if (helper.data('grid')) {
							ui.position.left = Math.floor(ui.position.left / beatSize) * beatSize - 
								Math.floor((offset.left - element.offset().left) % beatSize) - magicNumber;
							ui.position.top = scope.gridOffset().top - element.offset().top;
						}
					},
					delete: function(event, ui) {
						var helper = angular.element(ui.helper);
						if (!helper.data('grid')) {
							helper.remove();
							scope.track.removeSample(scope.sample);
						}
					},
					jquiOptions: function() {
						return {
							revert: tracked ? false : 'invalid',
						  helper: tracked ? 'original' : 'clone', 
						  scope: instrumentName,
						  containment: tracked ? '.track-grids' : ''
						};
					},
					draggableOptions: function() {
						return {
							placeholder: 'keep',
							onDrag: 'dragToGrid',
							onStop: 'delete'
						};
					}
				});
			}
		};
	}
]);