import React, { useState, useEffect } from "react";
import { Avatar } from "react-avatar-gradient";
import { FaPaintBrush, FaLightbulb, FaBolt, FaLanguage } from "react-icons/fa";
import { translations } from "./Language";

import unitedKingdom from './assets/united-kingdom.png';
import turkey from './assets/turkey.png';

export default function App() {
  const [name, setName] = useState("John Doe");
  const [size, setSize] = useState(64);
  const [shape, setShape] = useState("circle");
  const [customColor, setCustomColor] = useState("#FAD2E1");
  const [activeTab, setActiveTab] = useState("demo");
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'tr' for Turkish

  const t = (key) => translations[language][key];

  const examples = [
    { title: "Sarah Johnson", size: 64, shape: "circle" },
    { title: "Alex Rodriguez", size: 64, shape: "square" },
    { title: "Maria Garcia", size: 64, shape: "circle" },
    { title: "Wei Chen", size: 64, shape: "circle" },
    { title: "Kemal Sunal", size: 64, shape: "square" },
  ];

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText("npm install react-avatar-gradient");
    setCopied(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 flex flex-col items-center p-6">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
        >
          <img
            src={
              language === "en"
                ? unitedKingdom
                : turkey
            }
            alt="Language Flag"
            className="w-6 h-6"
          />
          <span className="font-medium text-gray-700">
            {language === "en" ? "English" : "Türkçe"}
          </span>
        </button>
      </div>
      <header className="w-full max-w-4xl text-center mb-10 pt-6">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Avatar title="React Avatar" size={80} shape="circle" />
            <div className="absolute -right-2 -bottom-2 bg-indigo-500 text-white font-semibold text-xs px-2 py-1 rounded-full">
              v2.0
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
            React Avatar Gradient
          </span>{" "}
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          {t("subtitle")}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.npmjs.com/package/react-avatar-gradient")
            }
            className="group bg-white cursor-pointer text-gray-800 px-6 py-2 rounded-full font-medium flex items-center gap-2 shadow-md hover:shadow-lg border border-gray-200 hover:bg-red-500 hover:text-white transition-all"
          >
            <svg
              className="w-5 h-5 text-red-500 transition-colors duration-300 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM3 21V3h18v18H3z"></path>
              <path d="M8 8v8h3v-6h3v6h3V8H8z"></path>
            </svg>
            {t("npmButton")}
          </button>
        </div>
      </header>
      {/* Feature highlights */}
      <div className="grid grid-cols-3 max-sm:grid-cols-1 justify-center gap-4 max-sm:gap-2 w-full max-w-4xl mb-10">
        {/* Kart 2 - Özelleştirilebilir */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <FaPaintBrush className="text-xl text-gray-500" />
            <div>
              <div>
                <h3 className="font-medium text-gray-800">
                  {t("customizable")}
                </h3>
                <p className="text-gray-500 text-sm">{t("customizableDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kart 3 - Hafif */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-xl text-gray-500" />
            <div>
              <div>
                <h3 className="font-medium text-gray-800">
                  {t("lightweight")}
                </h3>
                <p className="text-gray-500 text-sm">{t("lightweightDesc")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kart 4 - Kolay */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center gap-4 transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-3">
            <FaBolt className="text-xl text-gray-500" />
            <div>
              <h3 className="font-medium text-gray-800">{t("easy")}</h3>
              <p className="text-gray-500 text-sm">{t("easyDesc")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="w-full max-w-4xl mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("demo")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "demo"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("demo")}
          </button>
          <button
            onClick={() => setActiveTab("installation")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "installation"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("installation")}
          </button>
          <button
            onClick={() => setActiveTab("examples")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "examples"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("examples")}
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "gallery"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("gallery")}
          </button>
        </div>
      </div>
      {/* Tab Content */}
      <div className="w-full max-w-4xl">
        {activeTab === "demo" && (
          <div className="bg-white w-full rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-blue-50 text-blue-600 p-2 rounded-lg mr-3">
                🧪
              </span>
              {t("interactiveDemo")}
            </h2>

            <div className="flex flex-col md:flex-row md:items-start gap-10">
              <div className="flex flex-col items-center">
                <div className="p-8 bg-gray-50 rounded-xl shadow-inner mb-6 flex items-center justify-center">
                  <Avatar
                    title={name}
                    size={size}
                    shape={shape}
                    color={customColor}
                  />
                </div>
                <div className="bg-blue-50 p-4 rounded-lg w-full text-center">
                  <code className="text-sm text-blue-800">
                    &lt;Avatar title="{name}" size={size} shape="{shape}"
                    {customColor !== "#FAD2E1" ? `color="${customColor}"` : ""}{" "}
                    /&gt;
                  </code>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder={t("enterName")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("size")}: {size}px
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="32"
                      max="128"
                      value={size}
                      onChange={(e) => setSize(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded w-12 text-center">
                      {size}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t("shape")}
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShape("circle")}
                      className={`flex-1 py-3 px-4 flex flex-col items-center gap-2 rounded-lg border-2 transition-all ${
                        shape === "circle"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">{t("circle")}</span>
                    </button>
                    <button
                      onClick={() => setShape("square")}
                      className={`flex-1 py-3 px-4 flex flex-col items-center gap-2 rounded-lg border-2 transition-all ${
                        shape === "square"
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-10 h-10 bg-blue-500 rounded-lg"></div>
                      <span className="text-sm font-medium">{t("square")}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t("color")}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "#FAD2E1",
                      "#C8E6C9",
                      "#BBDEFB",
                      "#D1C4E9",
                      "#FFECB3",
                      "#FF8A65",
                    ].map((color) => (
                      <button
                        key={color}
                        onClick={() => setCustomColor(color)}
                        className={`w-8 h-8 rounded-full transition-transform ${
                          customColor === color
                            ? "ring-2 ring-offset-2 ring-blue-500 scale-110"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                    <div className="relative">
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-8 h-8 rounded-full cursor-pointer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-xs font-bold text-white drop-shadow-md">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "installation" && (
          <div className="bg-white w-full rounded-xl shadow-lg border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-50 text-purple-600 p-2 rounded-lg mr-3">
                📦
              </span>
              {t("installation")}
            </h2>

            <div className="space-y-8">
              <div className="mb-6">
                <div className="flex items-center justify-between bg-gray-800 text-white p-3 rounded-t-lg">
                  <span className="text-gray-300">{t("terminal")}</span>
                  <button
                    onClick={copyInstallCommand}
                    className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {t("copied")}
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                          />
                        </svg>
                        {t("copy")}
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900 text-yellow-400 p-4 rounded-b-lg overflow-x-auto text-sm font-mono">
                  npm install react-avatar-gradient
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {t("basicUsage")}
                </h3>

                <div className="bg-gray-800 text-white p-3 rounded-t-lg flex justify-between">
                  <span className="text-gray-300">App.jsx</span>
                </div>
                <pre className="bg-gray-900 text-yellow-400 p-4 rounded-b-lg overflow-x-auto text-sm font-mono">
                  {`import React from 'react';
import { Avatar } from 'react-avatar-gradient';

function App() {
  return (
    <div className="app">
      <h1>Hoş Geldiniz</h1>
      <div className="user-profile">
        <Avatar title="Mustafa Karaçuha" size={64} />
        <span>Mustafa Karaçuha</span>
      </div>
    </div>
  );
}`}
                </pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-medium text-blue-800 mb-1">{t("props")}</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>title:</strong> {t("propTitle")}
                  </li>
                  <li>
                    <strong>size:</strong> {t("propSize")}
                  </li>
                  <li>
                    <strong>shape:</strong> {t("propShape")}
                  </li>
                  <li>
                    <strong>color:</strong> {t("propColor")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "examples" && (
          <div className="bg-white w-full rounded-xl shadow-lg border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-green-50 text-green-600 p-2 rounded-lg mr-3">
                📝
              </span>
              {t("usageExamples")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all">
                <Avatar title="John Doe" size={72} />
                <span className="mt-4 text-lg font-medium">{t("default")}</span>
                <code className="mt-2 text-sm bg-gray-50 p-3 rounded-md w-full text-center border border-gray-100">
                  &lt;Avatar title="John Doe" /&gt;
                </code>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all">
                <Avatar title="Alex Johnson" shape="square" size={72} />
                <span className="mt-4 text-lg font-medium">
                  {t("squareShape")}
                </span>
                <code className="mt-2 text-sm bg-gray-50 p-3 rounded-md w-full text-center border border-gray-100">
                  &lt;Avatar title="Alex" shape="square" /&gt;
                </code>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all">
                <Avatar title="Mustafa Karaçuha" color="#FAD2E1" size={72} />
                <span className="mt-4 text-lg font-medium">
                  {t("customColor")}
                </span>
                <code className="mt-2 text-sm bg-gray-50 p-3 rounded-md w-full text-center border border-gray-100">
                  &lt;Avatar title="Mustafa" color="#FAD2E1" /&gt;
                </code>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-all">
                <div className="flex -space-x-4">
                  <Avatar title="Team" size={48} />
                  <Avatar title="Group" size={48} />
                  <Avatar title="Users" size={48} />
                </div>
                <span className="mt-4 text-lg font-medium">
                  {t("avatarGroup")}
                </span>
                <code className="mt-2bg-gray-50 p-3 rounded-md w-full text-center border border-gray-100 text-xs">
                  &lt;AvatarGroup users=&#123;[&#123;title: 'Takım'&#125;,
                  &#123;title: 'Grup'&#125;]&#125; /&gt;
                </code>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {t("advancedUsage")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    {t("userCardExample")}
                  </h4>
                  <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4 border border-gray-200">
                    <Avatar title="Mustafa Karaçuha" size={56} />
                    <div>
                      <div className="font-medium">Mustafa Karaçuha</div>
                      <div className="text-sm text-gray-500">
                        {t("developer")}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    {t("commentExample")}
                  </h4>
                  <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar title="Ahmet Yılmaz" size={32} />
                      <div>
                        <div className="font-medium text-sm">Ahmet Yılmaz</div>
                        <div className="text-xs text-gray-500">
                          {t("yesterday")}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{t("commentText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="bg-white w-full rounded-xl shadow-lg border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-pink-50 text-pink-600 p-2 rounded-lg mr-3">
                🖼️
              </span>
              {t("avatarGallery")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {examples.map((example, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:scale-105"
                >
                  <Avatar
                    title={example.title}
                    size={72}
                    shape={example.shape}
                    className="hover:scale-105 transition-transform duration-200"
                  />
                  <div className="mt-4 text-center">
                    <span className="font-medium text-gray-800">
                      {example.title.split(" ")[0]}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {example.title.split(" ")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {t("colorPalette")}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {[
                  "#6366F1",
                  "#8B5CF6",
                  "#EC4899",
                  "#F43F5E",
                  "#F97316",
                  "#EAB308",
                  "#10B981",
                ].map((color) => (
                  <div key={color} className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full mb-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-xs text-gray-500">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Added Footer Section */}
      <footer className="w-full max-w-4xl mx-auto mb-8 px-8 py-10 border border-gray-200 rounded-xl bg-gradient-to-b from-purple-100 shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-800 font-semibold text-xl mb-4">
            Mustafa Karaçuha
          </p>
          <p className="text-gray-600 text-center text-sm mb-4">
            {t("followText")}
          </p>
          <div className="flex gap-8">
            {/* GitHub Link */}
            <a
              href="https://github.com/mustafakaracuha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg
                className="w-8 h-8 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/mustafakaracuha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-8 h-8 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-6">{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
