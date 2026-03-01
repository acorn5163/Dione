import { useEffect, useRef } from "react";
import { Network, DataSet, Node, Edge, Options } from "vis-network/standalone";
import NodeBuilder from "./NodeBuilder";
import Card from "../Article_List/Card";

export default function VisMap() {
  // 描画先DOM
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const data = NodeBuilder()
    console.log(data)

    // オプション（挙動や見た目）
    const options: Options = {
        nodes: {
            shape: 'box',  
            widthConstraint: { minimum: 90, maximum: 90 },
            heightConstraint: { minimum: 90 },
            color: { background: '#ffffff', border: '#333333' },
            font: { size: 20, color: '#343434', multi: true },
        },
        edges: {
            color: '#666666',
            length: 250
        },
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            barnesHut: {
                gravitationalConstant: -2000,
                springLength: 95,
                springConstant: 0.04
            },
            stabilization: {
                enabled: true,
                iterations: 1000
            }
        },
        interaction: {
            hover: true, // ホバーイベントを有効化
            selectConnectedEdges: false
        }
    };


    // ネットワーク生成（ここが核心）
    const network = new Network(containerRef.current, data, options);

    // クリックイベント例
    network.on("click", (params) => {
      console.log("クリックされたノードID:", params.nodes);
    });

    // クリーンアップ（メモリリーク防止）
    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "500px", // ← これ必須（ないと表示されない）
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    />
  );
}
