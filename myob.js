    $(function() {

        $('#btn-15').click(function() {
            updateTimeArcs("", "15");
        });

        $('#btn-30').click(function() {
            updateTimeArcs("c30", "30");
        });

        $('#btn-45').click(function() {
            updateTimeArcs("c30 c45", "45");
        });

        $('#btn-60').click(function() {
            updateTimeArcs("c30 c45 c60", "60");
        });

        function updateTimeArcs(addClasses, displayText) {
            var $display = $('#delivery-time-display');
            var originalNumber = $display.text();
            $('#delivery-arc').removeClass("c30 c45 c60").addClass(addClasses);
            $display.text(displayText);
            animateNumbers('#delivery-time-display', 500, originalNumber)
        }

        $('#resetSwitch').click(function() {
            var $reset = $('#resetSwitch');
            $('.btn').removeClass('active');
            $('#btnBreakfast, #btnPopular, #btn-15').addClass('active');
            updateTimeArcs("", "15");
            $('#val-input-min').val('20');
            $('#val-input-max').val('180');
            range.noUiSlider.set([20, 180]);
        });

        function animateNumbers(id, ms, oldNum) {
            var $num = $(id)
            $num.prop('Counter', oldNum).animate({
                Counter: $num.text()
            }, {
                duration: ms || 400,
                easing: 'swing',
                step: function(now) {
                    $num.text(Math.ceil(now));
                }
            });
        }

        var range = document.getElementById('range');

        noUiSlider.create(range, {
            start: [20, 180],
            step: 1,
            margin: 20,
            connect: true,
            behaviour: 'tap-drag',
            range: {
                'min': 0,
                'max': 200
            }
        });
        // Connect the input to the slider
        var valueMax = document.getElementById('val-input-max'),
            valueMin = document.getElementById('val-input-min');

        // When the slider value changes, update the input and span
        range.noUiSlider.on('update', function(values, handle) {
            if (handle) {
                valueMax.value = values[handle];
            } else {
                valueMin.value = values[handle];
            }
        });

        // When the input changes, set the slider value
        valueMax.addEventListener('change', function() {
            range.noUiSlider.set([null, this.value]);
        });
        valueMin.addEventListener('change', function() {
            range.noUiSlider.set([this.value, null]);
        });
        // dom ready
    });
