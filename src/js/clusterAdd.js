export default function clusterAdd (mark, clusterer, myMap) {
     clusterer.add(mark);
     myMap.geoObjects.add(clusterer);
}