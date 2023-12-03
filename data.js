var APP_DATA = {
  "scenes": [
    {
      "id": "0-ostseite",
      "name": "Ostseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.06158813866720081,
        "pitch": -0.2062652700450549,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.5062383667542409,
          "pitch": -0.14575389324113353,
          "rotation": 0,
          "target": "1-sdseite"
        },
        {
          "yaw": 0.5697293881874899,
          "pitch": -0.1741649038795856,
          "rotation": 0,
          "target": "3-nordseite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sdseite",
      "name": "Südseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9479434441683487,
        "pitch": -0.33797990338248596,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.43760060974389,
          "pitch": 0.08906909834234966,
          "rotation": 0,
          "target": "0-ostseite"
        },
        {
          "yaw": -0.1848785824803283,
          "pitch": -0.21905439909147617,
          "rotation": 0,
          "target": "2-westseite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-westseite",
      "name": "Westseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9427883158599357,
        "pitch": -0.06935966886119616,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.1761230914925633,
          "pitch": 0.023019408756287163,
          "rotation": 0,
          "target": "1-sdseite"
        },
        {
          "yaw": 2.479702081701772,
          "pitch": 0.04023377709448006,
          "rotation": 0,
          "target": "3-nordseite"
        },
        {
          "yaw": -2.8421197180876963,
          "pitch": 0.05767592015849843,
          "rotation": 0,
          "target": "4-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-nordseite",
      "name": "Nordseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.155993705268884,
        "pitch": -0.40797217926384555,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.0974245791109567,
          "pitch": -0.04310384671368084,
          "rotation": 0,
          "target": "0-ostseite"
        },
        {
          "yaw": -1.0233660700093914,
          "pitch": -0.046061915970705414,
          "rotation": 0,
          "target": "2-westseite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.8882369845069533,
        "pitch": -0.009880602336231448,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.5939626371418107,
          "pitch": 0.03098528016301394,
          "rotation": 0,
          "target": "2-westseite"
        },
        {
          "yaw": -3.0909877371005656,
          "pitch": 0.0005548907024746086,
          "rotation": 0,
          "target": "5-stiegenhaus"
        },
        {
          "yaw": 1.7786785341207851,
          "pitch": 0.346128783326618,
          "rotation": 0,
          "target": "27-kellertreppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stiegenhaus",
      "name": "Stiegenhaus",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.920848535144991,
        "pitch": 0.0003378212106781575,
        "fov": 1.2755692943241541
      },
      "linkHotspots": [
        {
          "yaw": -1.0991386571486323,
          "pitch": 0.05134869258458963,
          "rotation": 0,
          "target": "4-eingang"
        },
        {
          "yaw": -1.5847781932270895,
          "pitch": 0.051641985037559124,
          "rotation": 0,
          "target": "6-w1-vorraum"
        },
        {
          "yaw": -2.8485740323602506,
          "pitch": -0.0028887454671551183,
          "rotation": 0,
          "target": "9-w2-vorraum"
        },
        {
          "yaw": 1.5409644792047619,
          "pitch": -0.006115312144984841,
          "rotation": 0,
          "target": "16-stiegenlauf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-w1-vorraum",
      "name": "W1, Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.8308680594079867,
        "pitch": -0.011501320806079462,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6810276435701734,
          "pitch": -0.00528365705924827,
          "rotation": 0,
          "target": "5-stiegenhaus"
        },
        {
          "yaw": -1.3385312200967903,
          "pitch": -0.017971063005969512,
          "rotation": 0,
          "target": "7-w1-kleines-zimmer"
        },
        {
          "yaw": -2.97909011169617,
          "pitch": -0.0017967075062461646,
          "rotation": 0,
          "target": "8-w1-groes-zimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-w1-kleines-zimmer",
      "name": "W1, kleines Zimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.5181994477077119,
        "pitch": -0.0023840566928932105,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.001356437360939,
          "pitch": 0.00451564150703021,
          "rotation": 0,
          "target": "6-w1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-w1-groes-zimmer",
      "name": "W1, großes Zimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.5847130824232103,
        "pitch": 0.013227219755234998,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.6288447557889612,
          "pitch": 0.1393282711867414,
          "rotation": 0,
          "target": "6-w1-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-w2-vorraum",
      "name": "W2, Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.05670605910856,
        "pitch": -0.004545462176398729,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.31884250365785505,
          "pitch": 0.031088466213528676,
          "rotation": 0,
          "target": "5-stiegenhaus"
        },
        {
          "yaw": -2.577938243678279,
          "pitch": 0.020262086793831457,
          "rotation": 0,
          "target": "10-w2-wohnzimmer"
        },
        {
          "yaw": 2.7413818629297833,
          "pitch": 0.012631750216899107,
          "rotation": 0,
          "target": "11-w2-schlafzimmer"
        },
        {
          "yaw": 1.056401089755898,
          "pitch": 0.010514007651362789,
          "rotation": 0,
          "target": "12-w2-kche"
        },
        {
          "yaw": 0.6961125992973063,
          "pitch": 0.011262781507085151,
          "rotation": 0,
          "target": "14-w2-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-w2-wohnzimmer",
      "name": "W2, Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.15452810231141,
        "pitch": -0.008718917531018278,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.6177243933043108,
          "pitch": 0.04886954046676273,
          "rotation": 0,
          "target": "9-w2-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-w2-schlafzimmer",
      "name": "W2, Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.1367354079638314,
        "pitch": -0.015334433692663296,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.3405527169209641,
          "pitch": 0.08906367907822421,
          "rotation": 0,
          "target": "9-w2-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-w2-kche",
      "name": "W2, Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.2829070913105713,
        "pitch": -0.00800971649756299,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.1472072132221278,
          "pitch": -0.0042355135962584,
          "rotation": 0,
          "target": "9-w2-vorraum"
        },
        {
          "yaw": 0.8259981647298709,
          "pitch": 0.0118995540954554,
          "rotation": 0,
          "target": "13-w2-speisekammer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-w2-speisekammer",
      "name": "W2, Speisekammer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.5731188502279103,
        "pitch": -0.005015786189860094,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.018005466595671,
          "pitch": 0.014393440409799396,
          "rotation": 0,
          "target": "12-w2-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-w2-gang",
      "name": "W2, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.07499503434584298,
        "pitch": 0.016107281897786763,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5403690735562607,
          "pitch": 0.029047524671849345,
          "rotation": 0,
          "target": "15-w2-bad"
        },
        {
          "yaw": -1.6774077905720972,
          "pitch": -0.014096628897146246,
          "rotation": 0,
          "target": "9-w2-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-w2-bad",
      "name": "W2, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2802056395479404,
        "pitch": -0.005700452710550863,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.7947965989747647,
          "pitch": 0.000918404253173577,
          "rotation": 0,
          "target": "14-w2-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-stiegenlauf",
      "name": "Stiegenlauf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6396973181308052,
          "pitch": 0.4722965727133115,
          "rotation": 0,
          "target": "5-stiegenhaus"
        },
        {
          "yaw": 1.369907952877643,
          "pitch": -0.2861792087331789,
          "rotation": 0,
          "target": "17-stiegenpodest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-stiegenpodest",
      "name": "Stiegenpodest",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4640659378966312,
          "pitch": 0.4479491838847949,
          "rotation": 0,
          "target": "16-stiegenlauf"
        },
        {
          "yaw": 0.22218990265142757,
          "pitch": -0.1422703614468972,
          "rotation": 0,
          "target": "18-dachtreppe"
        },
        {
          "yaw": -0.056420022319816354,
          "pitch": -0.14557708783756595,
          "rotation": 0,
          "target": "21-w3-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-dachtreppe",
      "name": "Dachtreppe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.697356529061107,
        "pitch": -0.6715813344155794,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.8213958128619652,
          "pitch": -1.0770069201741777,
          "rotation": 0,
          "target": "19-dachboden-1"
        },
        {
          "yaw": -1.283886710350206,
          "pitch": 0.05636442939329456,
          "rotation": 0,
          "target": "17-stiegenpodest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-dachboden-1",
      "name": "Dachboden 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9014116653109312,
        "pitch": 0.16880045272657185,
        "fov": 1.2385081048198245
      },
      "linkHotspots": [
        {
          "yaw": -2.97354830211202,
          "pitch": 0.06673464353104386,
          "rotation": 0,
          "target": "20-dachboden-2"
        },
        {
          "yaw": -1.1074589351579078,
          "pitch": 0.5917417395385058,
          "rotation": 0,
          "target": "18-dachtreppe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-dachboden-2",
      "name": "Dachboden 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.139562114006207,
          "pitch": -0.0910471742975183,
          "rotation": 0,
          "target": "19-dachboden-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-w3-vorraum",
      "name": "W3, Vorraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.4165303370245255,
        "pitch": -0.006379472570371192,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.3948374840167901,
          "pitch": 0.04121726958877936,
          "rotation": 0,
          "target": "17-stiegenpodest"
        },
        {
          "yaw": -1.5341368457554605,
          "pitch": 0.057245089281632744,
          "rotation": 0,
          "target": "24-w3-kche"
        },
        {
          "yaw": 3.077760170978509,
          "pitch": 0.02759364798202668,
          "rotation": 0,
          "target": "22-w3-wohnzimmer"
        },
        {
          "yaw": 1.5966271014740947,
          "pitch": -0.0024816850726416817,
          "rotation": 0,
          "target": "25-w3-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-w3-wohnzimmer",
      "name": "W3, Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.528215979632339,
        "pitch": -0.0009567726062442716,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.6875539301278497,
          "pitch": 0.009723233771829598,
          "rotation": 0,
          "target": "23-w3-seitenboden"
        },
        {
          "yaw": 0.16160493541894994,
          "pitch": 0.0265799585239197,
          "rotation": 0,
          "target": "21-w3-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-w3-seitenboden",
      "name": "W3, Seitenboden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.4748524274715322,
        "pitch": 0.11707300039966562,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6124962056335743,
          "pitch": 0.03468107399914189,
          "rotation": 0,
          "target": "22-w3-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-w3-kche",
      "name": "W3, Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.1596456822644345,
        "pitch": -0.008990279984235627,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.598074365828671,
          "pitch": 0.1366039179773484,
          "rotation": 0,
          "target": "21-w3-vorraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-w3-schlafzimmer",
      "name": "W3, Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.193979420038218,
        "pitch": -0.031477141059816915,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.0320391692757163,
          "pitch": 0.08581701933357877,
          "rotation": 0,
          "target": "21-w3-vorraum"
        },
        {
          "yaw": 0.7282557505502432,
          "pitch": 0.14253977195907197,
          "rotation": 0,
          "target": "26-w3-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-w3-bad",
      "name": "W3, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.4663122523678318,
        "pitch": 0.5122367531175112,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.6964434259970496,
          "pitch": 0.001461761164417652,
          "rotation": 0,
          "target": "25-w3-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-kellertreppe",
      "name": "Kellertreppe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.725834175358182,
        "pitch": 0.01206797527934711,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.856823330265625,
          "pitch": -0.36752630998044467,
          "rotation": 0,
          "target": "4-eingang"
        },
        {
          "yaw": 2.0413248763492717,
          "pitch": 0.44490349946800833,
          "rotation": 0,
          "target": "28-keller-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-keller-1",
      "name": "Keller 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5650508814074646,
          "pitch": 0.11221051981484997,
          "rotation": 0,
          "target": "29-keller-2"
        },
        {
          "yaw": -0.6340317588216635,
          "pitch": -0.0048959810415105665,
          "rotation": 0,
          "target": "27-kellertreppe"
        },
        {
          "yaw": -1.7231759010813015,
          "pitch": 0.036766508882561055,
          "rotation": 0,
          "target": "30-keller-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-keller-2",
      "name": "Keller 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.2143209988578043,
        "pitch": -0.016057102214327656,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.905113461695283,
          "pitch": -0.04352871517404644,
          "rotation": 0,
          "target": "28-keller-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-keller-3",
      "name": "Keller 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.3156437598005226,
        "pitch": 0.04177498575584693,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.9105493087394656,
          "pitch": -0.003104758945177366,
          "rotation": 0,
          "target": "28-keller-1"
        },
        {
          "yaw": -1.803487756533329,
          "pitch": 0.018670567895664902,
          "rotation": 0,
          "target": "31-keller-4"
        },
        {
          "yaw": 1.8632249725475907,
          "pitch": -0.008381559333734856,
          "rotation": 0,
          "target": "34-heizungskeller"
        },
        {
          "yaw": -2.852773504241668,
          "pitch": 0.012627153323737872,
          "rotation": 0,
          "target": "32-keller-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-keller-4",
      "name": "Keller 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.090503181020148,
        "pitch": 0.06852607161612667,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.242049888411092,
          "pitch": 0.041574990441350934,
          "rotation": 0,
          "target": "33-keller-6"
        },
        {
          "yaw": 1.5639579827236787,
          "pitch": 0.03988246657775463,
          "rotation": 0,
          "target": "30-keller-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-keller-5",
      "name": "Keller 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2960503976525395,
          "pitch": 0.014519276293741612,
          "rotation": 0,
          "target": "33-keller-6"
        },
        {
          "yaw": 0.3005001668650955,
          "pitch": 0.01940922659965949,
          "rotation": 0,
          "target": "30-keller-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-keller-6",
      "name": "Keller 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9910297113904765,
        "pitch": 0.016604964936895783,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.9743481019472036,
          "pitch": 0.0015220932086474903,
          "rotation": 0,
          "target": "31-keller-4"
        },
        {
          "yaw": 1.7030004383066872,
          "pitch": -0.007982618239335437,
          "rotation": 0,
          "target": "32-keller-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-heizungskeller",
      "name": "Heizungskeller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.6469194970286694,
        "pitch": -0.009689517363820954,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.6179070954258243,
          "pitch": -0.05104420978783608,
          "rotation": 0,
          "target": "30-keller-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
