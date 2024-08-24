export const useMap = () => {
  window.map = null;

  // Главная функция, вызывается при запуске скрипта
  main();
  async function main() {
    // ожидание загрузки модулей
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapControls,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;

    // Импорт модулей для элементов управления на карте
    const { YMapZoomControl, YMapGeolocationControl } = await ymaps3.import(
      '@yandex/ymaps3-controls@0.0.1',
    );

    // Координаты центра карты
    const CENTER_COORDINATES = [102.84245105605702, 20.926678845613086];
    // координаты метки на карте
    const MARKER_COORDINATES = [134.6231305976561, -24.20565551930472];

    // Объект с параметрами центра и зумом карты
    const LOCATION = { center: CENTER_COORDINATES, zoom: 2 };

    // Создание объекта карты
    map = new YMap(document.getElementById('map'), { location: LOCATION });

    // Добавление слоев на карту
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    // Добавление элементов управления на карту
    map.addChild(
      new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})),
    );
    map.addChild(
      new YMapControls({ position: 'top right' }).addChild(
        new YMapGeolocationControl({}),
      ),
    );

    // Создание маркера
    //   const el = document.createElement('img');
    //   el.className = 'my-marker';
    //   el.src = './assets/icons/marker.svg';
    //   el.title = 'Маркер';
    //   // При клике на маркер меняем центр карты на LOCATION с заданным duration
    //   el.onclick = () =>
    //     map.update({ location: { ...LOCATION, duration: 400 } });

    // Создание заголовка маркера
    //   const markerTitle = document.createElement('div');
    //   markerTitle.className = 'marker-title';
    //   markerTitle.innerHTML = 'Yogja, INA';

    //   Описание маркера
    //   const markerSubTitle = document.createElement('div');
    //   markerSubTitle.className = 'marker-subtitle';
    //   markerSubTitle.innerHTML = '100 Smith StreetCollingwood VIC 3066 AU';

    //   // Контейнер для элементов маркера
    //   const textContainer = document.createElement('div');
    //   textContainer.className = "marker-text"
    //   textContainer.appendChild(markerTitle);
    // textContainer.appendChild(markerSubTitle);

    const marker = document.getElementById('hero-marker');

    marker.onclick = () =>
      map.update({ location: { ...LOCATION, duration: 400 } });
    //   marker.appendChild(textContainer)
    //   marker.appendChild(el)

    // Добавление центра карты
    //   map.addChild(new YMapMarker({ coordinates: CENTER_COORDINATES }));

    // Добавление маркера на карту
    map.addChild(
      new YMapMarker(
        {
          coordinates: MARKER_COORDINATES,
          draggable: true,
          mapFollowsOnDrag: true,
        },
        marker,
      ),
    );
  }
};
