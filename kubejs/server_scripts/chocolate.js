ServerEvents.recipes((event) => {

    event.replaceInput(
        {input: 'candlelight:chocolate'},
        'candlelight:chocolate',
        '#c:chocolate'
    );

    event.replaceInput(
        {input: 'bakery:chocolate_truffle'},
        'bakery:chocolate_truffle',
        '#c:chocolate'
    );

    event.replaceInput(
        {input: 'create:bar_of_chocolate'},
        'create:bar_of_chocolate',
        '#c:chocolate'
    );

    event.custom(
        {
          "type": "create:mixing",
          "heatRequirement": "heated",
          "ingredients": [
            {
              "tag": "c:chocolate"
            }
          ],
          "results": [
            {
              "amount": 27000,
              "fluid": "create:chocolate"
            }
          ]
        }
    ).id('create:mixing/chocolate_melting');

});